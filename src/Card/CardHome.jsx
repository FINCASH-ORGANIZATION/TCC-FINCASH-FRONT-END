import { useEffect, useState } from "react";
import "../Card/CardHomeStyled.css";
import { exibirSaldo } from "../services/saldoServico.js"; // Importe o serviço correto conforme o caminho do seu projeto

export function CardHome() {
  const [saldo, setSaldo] = useState(0);
  const [transacoes, setTransacoes] = useState([]);

  useEffect(() => {
    async function fetchDadosFinanceiros() {
      try {
        // Misturar receitas e despesas em uma única lista
        const todasTransacoes = [...response.receitas, ...response.despesas];
        // Embaralhar a ordem das transações
        const transacoesEmbaralhadas = shuffleArray(todasTransacoes);

        setTransacoes(transacoesEmbaralhadas);
      } catch (error) {
        console.error("Erro ao buscar dados financeiros:", error);
      }
    }

    fetchDadosFinanceiros();
  }, []);

  // Função para embaralhar array (utilizando algoritmo Fisher-Yates)
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <>
      <div className="bg-cinzaEscuro absolute w-screen h-screen font-mono flex justify-center mt-96 ">
        <div className="bg-cinzaClaro2 flex justify-between w-2/12 h-1/6 m-8 p-3 rounded-3xl shadow-2xl shadow-black">
          <div className="flex flex-col justify-between">
            <h1 className="text-white text-7xl">Saldo</h1>
            <span className="text-white text-8xl">
            </span>{" "}
            {/* Exibe o saldo formatado */}
          </div>
          <img src="../src/Image/saldo.png" alt="" className="w-28 h-28" />
        </div>

        {/* Renderização dinâmica de todas as transações misturadas */}
        {transacoes.map((transacao, index) => (
          <div
            key={index}
            className="bg-cinzaClaro2 flex justify-between w-2/12 h-1/6 m-8 p-3 rounded-3xl shadow-2xl shadow-black"
          >
            <div className="flex flex-col justify-between">
              <h1 className="text-white text-7xl">
                {transacao.tipo === "receita" ? "Receita" : "Despesa"}
              </h1>
              <span className="text-white text-8xl">
                R$ {transacao.valor.toFixed(2)}
              </span>
            </div>
            <img
              src={`../src/Image/${
                transacao.tipo === "receita" ? "receita.png" : "despesa.png"
              }`}
              alt=""
              className="w-28 h-28"
            />
          </div>
        ))}

        <div className="bg-cinzaClaro2 flex justify-between w-2/12 h-1/6 m-8 p-3 rounded-3xl shadow-2xl shadow-black">
          <div className="flex flex-col justify-between">
            <h1 className="text-white text-7xl">Cartões</h1>
            <span className="text-white text-8xl">0</span>
          </div>
          <img src="../src/Image/cartoes.png" alt="" className="w-28 h-28" />
        </div>
      </div>
    </>
  );
}
