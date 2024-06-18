import { useEffect, useState } from "react";
import { HeaderHome } from "../header/header.jsx";
import { UsuarioLogado } from "../services/usuarioServico.js";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

export default function Perfil() {
  const [user, setUsuario] = useState({});

  useEffect(() => {
    async function pesUsuarioLogado() {
      try {
        const response = await UsuarioLogado();
        setUsuario(response.data.usuario);
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
    setUsuario(undefined);
  }

  return (
    <>
      <HeaderHome />
      <div className="bg-cinzaEscuro w-screen h-screen font-mono flex flex-col items-center justify-center">
        <div className="bg-cinzaClaro1 flex flex-col justify-center items-center pr-3 pl-3 pt-10 rounded-3xl shadow-2xl shadow-black">
          <img src="" alt="" />

          <button className="transition-all rounded-full bg-amareloPastel px-3 py-3 font-medium text-black hover:bg-amber-300">
            {user.avatar ? (
              <img src={user.avatar} alt="" className="w-24 h-24" />
            ) : (
              <img
                src="./src/Image/perfil.png"
                alt="imagem de perfil"
                className="w-24 h-24"
              />
            )}
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2">
            <div className="text-center col-span-2">
              <h2 className="text-3xl text-quaseBranco my-2">Nome</h2>
              <h3 className="text-3xl text-cinzaClaro2">
                <p>
                  {user.nome}
                  {user.sobrenome}
                </p>
              </h3>
            </div>

            <div className="text-center col-span-2">
              <h2 className="text-3xl text-quaseBranco my-2">
                Endereço de email
              </h2>
              <h3 className="text-3xl text-cinzaClaro2">
                <p>{user.email}</p>
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <Link to="/home">
            <button
              className="bg-green-600 text-3xl font-bold font-mono px-5 my-4 text-quaseBranco py-4 rounded-lg"
              type="submit"
            >
              Voltar
            </button>
            </Link>

            <button
              className="bg-azulclaro text-3xl font-bold font-mono px-5 my-4 text-quaseBranco py-4 rounded-lg"
              type="submit"
            >
              Editar
            </button>

            <button
              className="bg-red-500 text-3xl font-bold font-mono px-5 my-4 text-quaseBranco py-4 rounded-lg"
              type="submit"
              onClick={Deslogar}
            >
              Sair
            </button>

            
          </div>
        </div>
      </div>
    </>
  );
}
