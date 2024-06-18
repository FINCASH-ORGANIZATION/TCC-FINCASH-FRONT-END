import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { UsuarioLogado } from "../services/usuarioServico";
import { Link } from "react-router-dom";

export function HeaderHome() {
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

  return (
    <header className="absolute bg-cinzaEscuro shadow-lg shadow-black flex h-28 w-screen items-center justify-end font-mono">
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
          <img src="../src/Image/logofincash.png" alt="" className="w-16 h-16" />
          <span className="text-5xl">fincash</span>
        </div>

        <a className="pr-16 text-3xl text-white">Sobre os criadores</a>
        <a className="pr-10 text-3xl text-white">Contato</a>

        {user ? (
          <p>{user.nome}</p>
        ) : (
          <button className="transition-all rounded-full bg-amareloPastel mr-5 px-10 py-3 font-mono text-3xl text-black hover:bg-amber-300 text-center">
            Faça seu login
          </button>
        )}

        <Link to="/perfil">
          <button className="transition-all rounded-full bg-amareloPastel px-3 py-3 font-medium text-black hover:bg-amber-300 mr-16">
            <img src={user.avatar} alt="Perfil" className="w-14 h-14" />
          </button>
        </Link>
      </nav>
    </header>
  );
}
