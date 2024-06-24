import { useEffect, useState } from "react";
import "../Card/CardHomeStyled.css";
import { exibirSaldo } from "../services/saldoServico.js"; // Importe o serviço correto conforme o caminho do seu projeto

export function CardHome() {
  const [saldo, setSaldo] = useState(0); // Inicializando com 0 enquanto aguarda a resposta da API

  useEffect(() => {
    // Função para buscar o saldo do usuário
    async function fetchSaldo() {
      try {
        const response = await exibirSaldo(); // Chama a função do serviço para buscar o saldo
        console.log(response); // Verifica a resposta no console para depuração
        setSaldo(response); // Define o saldo no estado
      } catch (error) {
        console.error("Erro ao buscar saldo do usuário:", error);
      }
    }

    // Chama a função para buscar o saldo assim que o componente for montado
    fetchSaldo();
  }, []); // O array vazio assegura que useEffect será executado apenas uma vez, equivalente ao componentDidMount()

  return (
    <>
      <div className="bg-cinzaEscuro absolute w-screen h-screen font-mono flex justify-center mt-96 ">
        <div className="bg-cinzaClaro2 flex justify-between w-2/12 h-1/6 m-8 p-3 rounded-3xl shadow-2xl shadow-black">
          <div className="flex flex-col justify-between">
            <h1 className="text-white text-7xl">Saldo</h1>
            <span className="text-white text-8xl">
              R$ {saldo.toFixed(2)}
            </span>{" "}
            {/* Exibe o saldo formatado */}
          </div>
          <img src="../src/Image/saldo.png" alt="" className="w-28 h-28" />
        </div>
        <div className="bg-cinzaClaro2 flex justify-between w-2/12 h-1/6 m-8 p-3 rounded-3xl shadow-2xl shadow-black">
          <div className="flex flex-col justify-between">
            <h1 className="text-white text-7xl">Receita</h1>
            <span className="text-white text-8xl">R$ 0,00</span>
          </div>
          <img src="../src/Image/receita.png" alt="" className="w-28 h-28" />
        </div>
        <div className="bg-cinzaClaro2 flex justify-between w-2/12 h-1/6 m-8 p-3 rounded-3xl shadow-2xl shadow-black">
          <div className="flex flex-col justify-between">
            <h1 className="text-white text-7xl">Despesa</h1>
            <span className="text-white text-8xl">R$ 0,00</span>
          </div>
          <img src="../src/Image/despesa.png" alt="" className="w-28 h-28" />
        </div>
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
