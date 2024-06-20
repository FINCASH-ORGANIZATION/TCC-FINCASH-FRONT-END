import { useContext, useEffect, useState } from "react";
import { HeaderHome } from "../header/header.jsx";
import { UsuarioLogado } from "../services/usuarioServico.js";
import Cookies from "js-cookie";
import { UserContext } from "../Context/usuarioContext.jsx";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import NavigationBar from "../NavBar/NavBar.jsx";

export default function Perfil() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    async function pesUsuarioLogado() {
      try {
        const response = await UsuarioLogado();
      } catch (error) {
        console.log(error);
      }
    }

    if (Cookies.get("token")) {
      pesUsuarioLogado();
    }
  }, []);

  function Deslogar() {
    Cookies.remove("token");
    setUser(undefined);
    navigate("/");
  }

  return (
    <>
      <HeaderHome />
      <div className="bg-cinzaEscuro w-screen h-screen font-mono flex flex-col items-center justify-center">
        <div className="bg-cinzaClaro1 h-3/6 flex flex-col justify-between items-center pr-10 pl-10 pt-20 rounded-3xl shadow-2xl shadow-black">
        <div className="flex flex-col items-center">
          <img src="" alt="" />

          <button className="transition-all rounded-full bg-amareloPastel px-10 py-10 font-medium text-black hover:bg-amber-300 flex justify-center items-center ">
            {user.avatar ? (
              <img src={user.avatar} alt="" className="w-44 h-44" />
            ) : (
              <img
                src="./src/Image/perfil.png"
                alt="imagem de perfil"
                className="w-44 h-44"
              />
            )}
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2 mt-10">
            <div className="text-center col-span-2">
              <h2 className="text-6xl text-quaseBranco my-2">Nome</h2>
              <h3 className="text-6xl text-cinzaClaro2">
                <p>
                  {user.nome}
                  {user.sobrenome}
                </p>
              </h3>
            </div>

            <div className="text-center col-span-2">
              <h2 className="text-6xl text-quaseBranco my-2">
                Endereço de email
              </h2>
              <h3 className="text-6xl text-cinzaClaro2">
                <p>{user.email}</p>
              </h3>
            </div>
          </div>
          </div>

          <div className="grid grid-cols-3 gap-5">
            <Link to="/home">
            <button
              className="bg-green-600 text-6xl font-bold font-mono px-5 my-4 text-quaseBranco py-4 rounded-lg"
              type="submit"
            >
              Voltar
            </button>
            </Link>

            <button
              className="bg-azulclaro text-6xl font-bold font-mono px-5 my-4 text-quaseBranco py-4 rounded-lg"
              type="submit"
            >
              Editar
            </button>

            <button
              className="bg-red-500 text-6xl font-bold font-mono px-5 my-4 text-quaseBranco py-4 rounded-lg"
              type="submit"
              onClick={Deslogar}
            >
              Sair
            </button>

            
          </div>
          <NavigationBar />
        </div>
      </div>
    </>
  );
}
