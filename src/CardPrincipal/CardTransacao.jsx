import { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { TransacaoContext } from "../Context/transacaoContext";
import { pesqDescricaoTransacao } from "../services/transacaoServico";
import { InputPes } from "../input/inputFormShow";
import "./css/CardTransacao.css";

export function CardTransacao() {
  const { transacao, setTransacao } = useContext(TransacaoContext);
  const [descricao, setDescricao] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [animate, setAnimate] = useState(false);
  const transactionsPerPage = 5;

  useEffect(() => {
    console.log("Token obtido dos cookies:", Cookies.get("token"));
  }, []);

  const handleSearch = async () => {
    console.log("Termo de pesquisa:", descricao);
    await sendSearchToBackend(descricao);
  };

  const sendSearchToBackend = async (termo) => {
    try {
      console.log("Enviando termo de pesquisa ao backend:", termo);
      const response = await pesqDescricaoTransacao({ descricao: termo });
      console.log("Resposta do backend:", response);

      if (response && response.results && Array.isArray(response.results)) {
        // Ordenar transações por data antes de setar
        const sortedTransactions = response.results.sort(
          (a, b) => new Date(b.data) - new Date(a.data)
        );
        setTransacao(sortedTransactions);
        setCurrentPage(1); // Resetar para a primeira página após a pesquisa
      } else {
        console.log("Transação não localizada no servidor");
        setTransacao([]);
      }
    } catch (error) {
      console.log("Erro durante a pesquisa no backend:", error);
    }
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return new Intl.DateTimeFormat("pt-BR", options).format(
      new Date(dateString)
    );
  };

  // Lógica de paginação
  const indexOfLastTransaction = currentPage * transactionsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - transactionsPerPage;
  const currentTransactions = Array.isArray(transacao)
    ? transacao.slice(indexOfFirstTransaction, indexOfLastTransaction)
    : [];

  const handleNextPage = () => {
    if (indexOfLastTransaction < transacao.length) {
      setAnimate(true);
      setTimeout(() => {
        setCurrentPage(currentPage + 1);
        setAnimate(false);
      }, 300);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setAnimate(true);
      setTimeout(() => {
        setCurrentPage(currentPage - 1);
        setAnimate(false);
      }, 300);
    }
  };

  return (
    <div className="w-11/12 lg:w-8/12 xl:w-6/12 mx-auto mt-20 flex flex-col justify-center">
      <div className="bg-cinzaClaro2 w-full p-8 shadow-2xl shadow-black flex flex-col lg:flex-row items-center rounded-3xl transition-transform duration-500 transform hover:scale-105">
        <div className="left w-full lg:w-1/2 mb-4 lg:mb-0">
          <span className="text-3xl md:text-5xl lg:text-6xl xl:text-8xl text-cinzaClaro5">
            Transações
          </span>
        </div>

        <div className="right w-full lg:w-1/2 flex justify-end">
          <div className="flex w-full lg:w-auto">
            <InputPes
              type="text"
              name={"descricao"}
              placeholder="Pesquise por descrição, valor ou categoria"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="border border-gray-400 rounded-l px-4 py-2 w-full lg:w-auto"
            />

            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white rounded-r px-4 py-2 w-full lg:w-auto"
            >
              Pesquisar
            </button>
          </div>
        </div>
      </div>

      <div className="bg-cinzaClaro2 mt-10 shadow-2xl shadow-black flex justify-center rounded-3xl transition-transform duration-500 transform hover:scale-105">
        <div className="w-full rounded-3xl">
          <div className="shadow-md rounded-3xl overflow-x-auto">
            <table
              className={`w-full border-collapse ${
                animate ? "animate-fade" : ""
              }`}
            >
              <thead>
                <tr className="bg-white text-left text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-cinzaClaro2">
                  <th className="px-2 py-2 sm:px-4 sm:py-4 md:px-6 md:py-6 lg:px-8 lg:py-10">
                    Data
                  </th>
                  <th className="px-2 py-2 sm:px-4 sm:py-4 md:px-6 md:py-6 lg:px-8 lg:py-10">
                    Descrição
                  </th>
                  <th className="px-2 py-2 sm:px-4 sm:py-4 md:px-6 md:py-6 lg:px-8 lg:py-10">
                    Categoria
                  </th>
                  <th className="px-2 py-2 sm:px-4 sm:py-4 md:px-6 md:py-6 lg:px-8 lg:py-10">
                    Tipo
                  </th>
                  <th className="px-2 py-2 sm:px-4 sm:py-4 md:px-6 md:py-6 lg:px-8 lg:py-10">
                    Valor
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentTransactions.length > 0 ? (
                  currentTransactions.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-cinzaClaro3 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white rounded-3xl transition-colors duration-300"
                    >
                      <td className="px-2 py-2 sm:px-4 sm:py-4 md:px-6 md:py-6 lg:px-8 lg:py-10">
                        {formatDate(item.data)}
                      </td>
                      <td className="px-2 py-2 sm:px-4 sm:py-4 md:px-6 md:py-6 lg:px-8 lg:py-10">
                        {item.descricao
                          ? item.descricao
                          : "Não possui descrição"}
                      </td>
                      <td className="px-2 py-2 sm:px-4 sm:py-4 md:px-6 md:py-6 lg:px-8 lg:py-10">
                        {item.categoria
                          ? item.tipoTransacao
                          : "Não possui categoria"}
                      </td>
                      <td className="px-2 py-2 sm:px-4 sm:py-4 md:px-6 md:py-6 lg:px-8 lg:py-10">
                        {item.tipoTransacao}
                      </td>
                      <td className="px-2 py-2 sm:px-4 sm:py-4 md:px-6 md:py-6 lg:px-8 lg:py-10">
                        <span className={animate ? "animate-pulse" : ""}>
                          {formatCurrency(item.valor)}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="text-center py-2 sm:py-4 md:py-6 lg:py-10"
                    >
                      Nenhum dado de transação disponível
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex items-center justify-between p-2 sm:p-4 md:p-5">
            <button
              onClick={handlePreviousPage}
              className="bg-blue-500 text-white rounded px-4 py-2"
              disabled={currentPage === 1}
            >
              Anterior
            </button>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white">
              Página {currentPage}
            </span>
            <button
              onClick={handleNextPage}
              className="bg-blue-500 text-white rounded px-4 py-2"
              disabled={indexOfLastTransaction >= transacao.length}
            >
              Próxima
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
