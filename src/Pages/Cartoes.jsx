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
              <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <button
                  className="flex flex-col items-center space-x-2 focus:outline-none"
                  onClick={handleMostrarAddCartao}
                >
                  <img
                    src="../src/Image/mais.png"
                    alt=""
                    className="w-36 md:w-36"
                  />
                  <span className="text-7xl md:text-8xl">
                    Adicionar Cartão
                  </span>
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center space-x-2 focus:outline-none">
              <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <button
                  className="flex flex-col justify-center items-center"
                  onClick={handleMostrarCartoes}
                >
                  <img
                    src="../src/Image/cartao-de-credito.png"
                    alt=""
                    className="w-36 md:w-36"
                  />
                  <span className="text-7xl md:text-8xl">
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
