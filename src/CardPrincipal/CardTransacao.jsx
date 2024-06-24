import { InputPes } from "../input/inputFormShow";
import { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { TransacaoContext } from "../Context/transacaoContext";
import { pesqDescricaoTransacao } from "../services/transacaoServico";

export function CardTransacao() {
  const { transacao, setTransacao } = useContext(TransacaoContext);
  const [descricao, setDescricao] = useState("");

  useEffect(() => {
    console.log("Token obtido dos cookies:", Cookies.get("token"));
  }, []);

  const handleSearch = () => {
    console.log("Termo de pesquisa:", descricao);
    sendSearchToBackend(descricao);
  };

  const sendSearchToBackend = async (termo) => {
    try {
      console.log("Enviando termo de pesquisa ao backend:", termo);
      const response = await pesqDescricaoTransacao({ descricao: termo });
      console.log("Resposta do backend:", response);

      if (response && response.results && response.results.length > 0) {
        setTransacao(response.results);
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
            <table className="w-full border-collapse">
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
                    Conta
                  </th>
                  <th className="px-2 py-2 sm:px-4 sm:py-4 md:px-6 md:py-6 lg:px-8 lg:py-10">
                    Valor
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(transacao) ? (
                  transacao.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-cinzaClaro3 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white rounded-3xl transition-colors duration-300"
                    >
                      <td className="px-2 py-2 sm:px-4 sm:py-4 md:px-6 md:py-6 lg:px-8 lg:py-10">
                        {formatDate(item.data)}
                      </td>
                      <td className="px-2 py-2 sm:px-4 sm:py-4 md:px-6 md:py-6 lg:px-8 lg:py-10">
                        {item.descricao}
                      </td>
                      <td className="px-2 py-2 sm:px-4 sm:py-4 md:px-6 md:py-6 lg:px-8 lg:py-10">
                        {item.categoria.categoriaPersonalizada}
                      </td>
                      <td className="px-2 py-2 sm:px-4 sm:py-4 md:px-6 md:py-6 lg:px-8 lg:py-10">
                        {item.conta}
                      </td>
                      <td className="px-2 py-2 sm:px-4 sm:py-4 md:px-6 md:py-6 lg:px-8 lg:py-10">
                        {formatCurrency(item.valor)}
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
          <div className="mt-4 flex items-center p-2 sm:p-4 md:p-5">
            <div className="flex items-center">
              <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white">
                Linhas por página:
              </div>
              <span className="ml-2 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white">
                2
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
