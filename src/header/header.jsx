import { useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { UsuarioLogado } from "../services/usuarioServico";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/usuarioContext";

export function HeaderHome() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    async function pesUsuarioLogado() {
      try {
        const response = await UsuarioLogado();
        setUser(response.data.usuario);
      } catch (error) {
        console.log(error);
      }
    }

    if (Cookies.get("token")) {
      pesUsuarioLogado();
    }
  }, []);

  return (
    <header className="absolute bg-cinzaEscuro shadow-lg shadow-black flex h-44 w-screen items-center justify-end font-mono">
      <nav className="flex items-center text-branco">
        <div className="absolute flex items-center left-0 ml-16 w-24 h-24">

          {!user.avatar ? (
            <img src={user.avatar} className="w-24 h-24" />
          ) : (
            <img
              src="./src/Image/perfil.png"
              alt="imagem de perfil"
              className="w-24 h-24"
            />
          )}
          <img src="../src/Image/logofincash.png" alt="" className="w-32 h-28" />
          <span className="text-8xl">fincash</span>
        </div>

        <span className="pr-10 text-6xl text-white">Nome do usuario</span>

        {user ? (
          <p>{user.nome}</p>
        ) : (
          <button className="transition-all rounded-full bg-amareloPastel mr-5 px-10 py-3 font-mono text-3xl text-black hover:bg-amber-300 text-center">
            Faça seu login
          </button>
        )}

        <Link to="/perfil">
          <button className="transition-all rounded-full bg-amareloPastel px-3 py-3 font-medium text-black hover:bg-amber-300 mr-16">
            <img src={user.avatar} alt="Perfil" className="w-24 h-24" />
          </button>
        </Link>
      </nav>
    </header>
  );
}
