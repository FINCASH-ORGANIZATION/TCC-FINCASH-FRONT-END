import { useState } from "react";
import NavigationBar from "../NavBar/NavBar.jsx";
import { HeaderHome } from "../header/header.jsx";
import { CardTransacao } from "../CardPrincipal/CardTransacao.jsx";

function CriarTransacaoForm() {
  return (
    <div className="bg-white p-10 md:p-20 rounded-3xl shadow-2xl shadow-black transition-transform duration-500 transform hover:scale-105">
      <form>
        <h2 className="text-2xl md:text-4xl mb-4">Criar Transação</h2>
        <div className="mb-4">
          <label className="block text-sm md:text-lg mb-2" htmlFor="descricao">
            Descrição:
          </label>
          <input
            type="text"
            id="descricao"
            name="descricao"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm md:text-lg mb-2" htmlFor="valor">
            Valor:
          </label>
          <input
            type="number"
            id="valor"
            name="valor"
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Criar
        </button>
      </form>
    </div>
  );
}

export default function Cartoes() {
  const [mostrarCriarTransacao, setMostrarCriarTransacao] = useState(false);
  const [mostrarVerTransacoes, setMostrarVerTransacoes] = useState(false);

  const handleMostrarCriarTransacao = () => {
    setMostrarCriarTransacao(!mostrarCriarTransacao);
    setMostrarVerTransacoes(false);
  };

  const handleMostrarVerTransacoes = () => {
    setMostrarVerTransacoes(!mostrarVerTransacoes);
    setMostrarCriarTransacao(false);
  };

  return (
    <>
      <HeaderHome />
      <div className="bg-cinzaEscuro w-screen h-screen font-mono flex flex-col justify-center items-center">
        {mostrarCriarTransacao ? (
          <CriarTransacaoForm />
        ) : mostrarVerTransacoes ? (
          <CardTransacao />
        ) : (
          <div className="flex flex-col md:flex-row mt-10 space-y-10 md:space-y-0 md:space-x-10">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-white p-10 md:p-20 rounded-3xl shadow-2xl shadow-black transition-transform duration-500 transform hover:scale-105">
                <button
                  className="flex flex-col justify-center items-center"
                  onClick={handleMostrarCriarTransacao}
                >
                  <img
                    src="../src/Image/mais.png"
                    alt=""
                    className="w-20 md:w-44"
                  />
                  <span className="text-2xl md:text-8xl text-black">
                    Criar Transação
                  </span>
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="bg-white p-10 md:p-20 rounded-3xl shadow-2xl shadow-black transition-transform duration-500 transform hover:scale-105">
                <button
                  className="flex flex-col justify-center items-center"
                  onClick={handleMostrarVerTransacoes}
                >
                  <img
                    src="../src/Image/cartoes.png"
                    alt=""
                    className="w-20 md:w-44"
                  />
                  <span className="text-2xl md:text-8xl text-black">
                    Ver Suas Transações
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}

        <NavigationBar />
      </div>
    </>
  );
}
