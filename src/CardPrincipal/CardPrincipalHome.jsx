import { useState, useEffect } from "react";
import { puxarReceita, puxarDespesa } from "../services/despesa&receitaServico";

export default function CardPrincipalHome() {
  const [dados, setDados] = useState([]);
  const [offset, setOffset] = useState(0);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const responseReceitas = await puxarReceita();
        const responseDespesas = await puxarDespesa();

        const receitas = Array.isArray(responseReceitas.results)
          ? responseReceitas.results.map((item) => ({ ...item, receita: true }))
          : [];
        const despesas = Array.isArray(responseDespesas.results)
          ? responseDespesas.results.map((item) => ({
              ...item,
              receita: false,
            }))
          : [];

        const dadosCombinados = [...receitas, ...despesas].sort(
          (a, b) => new Date(b.data) - new Date(a.data)
        );
        setDados(dadosCombinados);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setCarregando(false);
      }
    }
    fetchData();
  }, []);

  // Função para formatar o valor em formato monetário brasileiro
  const formatarValor = (valor) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valor);
  };

  return (
    <div className="bg-cinzaClaro2 absolute w-9/12 h-6/12 mt-96 shadow-2xl shadow-black flex justify-center rounded-3xl">
      <div className="bg-cinzaClaro2 w-full rounded-3xl">
        <div className="bg-cinzaClaro2 shadow-md rounded-3xl p-8">
          {carregando ? (
            <div className="flex items-center justify-center">
              <div className="loader border-r-2 rounded-full border-yellow-500 bg-yellow-300 animate-spin h-8 w-8 mr-3"></div>
              <p className="text-3xl text-yellow-700">Carregando...</p>
            </div>
          ) : (
            <>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-left text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-white">
                    <th className="px-4 py-4 sm:px-6 sm:py-6 text-6xl">Data</th>
                    <th className="px-4 py-4 sm:px-6 sm:py-6 text-6xl">
                      Descrição
                    </th>
                    <th className="px-4 py-4 sm:px-6 sm:py-6 text-6xl">
                      Categoria
                    </th>
                    <th className="px-4 py-4 sm:px-6 sm:py-6 text-6xl">
                      Valor
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white text-gray-900">
                  {dados.length === 0 ? (
                    <tr>
                      <td
                        className="px-4 py-4 text-center text-6xl"
                        colSpan="4"
                      >
                        O usuário ainda não cadastrou nenhuma despesa nem
                        receita.
                      </td>
                    </tr>
                  ) : (
                    dados.slice(offset, offset + 5).map((item) => (
                      <tr
                        key={item.id}
                        className="hover:bg-gray-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl rounded-lg"
                      >
                        <td className="px-4 py-4">
                          {new Date(item.data).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-4">
                          {item.descricao ? item.descricao : "Não há descrição"}
                        </td>
                        <td className="px-4 py-4">{item.categoria}</td>
                        <td className="px-4 py-4">
                          <span
                            className={
                              item.receita ? "text-green-600" : "text-red-600"
                            }
                          >
                            {item.receita ? "+" : "-"}{" "}
                            <span className={carregando ? "animate-pulse" : ""}>
                              {formatarValor(Math.abs(item.valor))}
                            </span>
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setOffset(Math.max(offset - 5, 0))}
                  className="bg-blue-500 text-white p-5 text-5xl rounded-lg hover:bg-blue-600"
                  disabled={offset === 0}
                >
                  Voltar
                </button>
                <button
                  onClick={() => setOffset(offset + 5)}
                  className="bg-blue-500 text-white p-5 text-5xl rounded-lg hover:bg-blue-600"
                  disabled={offset + 5 >= dados.length}
                >
                  Próximo
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
