import { useState } from "react";
import { HeaderHome } from "../header/header.jsx";
import AddCartao from "../CardPrincipal/AddCartao.jsx";
import MostrarCartao from "../CardPrincipal/MostrarCartao.jsx";
import NavigationBar from "../NavBar/NavBar.jsx";

export default function App() {
  const [mostrarAddCartao, setMostrarAddCartao] = useState(false);
  const [mostrarCartoes, setMostrarCartoes] = useState(false);

  // Função para alternar entre a exibição do AddCartao e MostrarCartao
  const handleMostrarAddCartao = () => {
    setMostrarAddCartao(!mostrarAddCartao);
    setMostrarCartoes(false); // Certificando-se de que MostrarCartao não está sendo exibido
  };

  // Função para alternar entre a exibição do AddCartao e MostrarCartao
  const handleMostrarCartoes = () => {
    setMostrarCartoes(!mostrarCartoes);
    setMostrarAddCartao(false); // Certificando-se de que AddCartao não está sendo exibido
  };

  return (
    <>
      <HeaderHome />
      <div className="bg-cinzaEscuro w-screen h-screen font-mono flex flex-col justify-center items-center">
        {/* Renderização condicional baseada no estado mostrarAddCartao ou mostrarCartoes */}
        {mostrarAddCartao ? (
          <AddCartao />
        ) : mostrarCartoes ? (
          <MostrarCartao />
        ) : (
          <div className="flex flex-col md:flex-row mt-10 space-y-10 md:space-y-0 md:space-x-10">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-white p-10 md:p-20 rounded-3xl shadow-2xl shadow-black transition-transform duration-500 transform hover:scale-105">
                <button
                  className="flex flex-col justify-center items-center"
                  onClick={handleMostrarAddCartao}
                >
                  <img
                    src="../src/Image/mais.png"
                    alt=""
                    className="w-20 md:w-44"
                  />
                  <span className="text-2xl md:text-8xl text-black">
                    Adicionar
                  </span>
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="bg-white p-10 md:p-20 rounded-3xl shadow-2xl shadow-black transition-transform duration-500 transform hover:scale-105">
                <button
                  className="flex flex-col justify-center items-center"
                  onClick={handleMostrarCartoes}
                >
                  <img
                    src="../src/Image/cartoes.png"
                    alt=""
                    className="w-20 md:w-44"
                  />
                  <span className="text-2xl md:text-8xl text-black">
                    Ver Cartões
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
