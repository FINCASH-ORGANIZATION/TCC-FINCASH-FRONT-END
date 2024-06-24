import "../CardPrincipal/CardTransacao.css";
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

  return (
    <div className="w-11/12 h-6/12 absolute mt-40 flex flex-col justify-center">
      <div className="bg-cinzaClaro2 w-full h-6/12 p-10 shadow-2xl shadow-black flex items-center rounded-3xl">
        <div className="left w-full h-full">
          <span className="text-8xl text-cinzaClaro5">Transações</span>
        </div>

        <div className="right w-full flex justify-end">
          <div className="flex">
            <InputPes
              type="text"
              name={"descricao"}
              placeholder="Pesquise por descrição, valor ou categoria"
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="border border-gray-400 rounded-l px-4 py-2"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white rounded-r px-4 py-2"
            >
              Pesquisar
            </button>
          </div>
        </div>
      </div>

      <div className="bg-cinzaClaro2 h-6/12 mt-20 shadow-2xl shadow-black flex justify-center rounded-3xl">
        <body className="bg-cinzaClaro2 w-full rounded-3xl">
          <div className="bg-cinzaClaro2 shadow-md rounded-3xl">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-white text-left text-7xl font-medium text-cinzaClaro2">
                  <th className="px-4 py-10">Data</th>
                  <th className="px-4 py-10">Descrição</th>
                  <th className="px-4 py-10">Categoria</th>
                  <th className="px-4 py-10">Conta</th>
                  <th className="px-4 py-10">Valor</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(transacao) ? (
                  transacao.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-cinzaClaro3 text-6xl text-white rounded-3xl"
                    >
                      <td className="px-4 py-10">{item.data}</td>
                      <td className="px-4 py-10">{item.descricao}</td>
                      <td className="px-4 py-10">
                        {item.categoria.categoriaPersonalizada}
                      </td>
                      <td className="px-4 py-10">{item.conta}</td>
                      <td className="px-4 py-10">{item.valor}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5">Nenhum dado de transação disponível</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex items-center p-5">
            <div className="flex items-center">
              <div className="text-6xl text-white">Linhas por página:</div>
              <span className="text-6xl text-white">2</span>
            </div>
          </div>
        </body>
      </div>
    </div>
  );
}
