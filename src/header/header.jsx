import { useContext, useEffect } from "react";
import Cookies from "js-cookie";
import { UsuarioLogado } from "../services/usuarioServico";
import { puxarTransacaoUsuario } from "../services/transacaoServico";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/usuarioContext";
import { TransacaoContext } from "../Context/transacaoContext";

export function HeaderHome() {
  const { user, setUser } = useContext(UserContext);
  const { setTransacao } = useContext(TransacaoContext);

  async function pesTransacao() {
    try {
      const response = await puxarTransacaoUsuario();
      setTransacao(response.results);
    } catch (error) {
      console.log(error);
    }
  }

  async function pesUsuarioLogado() {
    try {
      const response = await UsuarioLogado();
      setUser(response.data.usuario);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    pesUsuarioLogado();
    pesTransacao();
    if (Cookies.get("token")) {
      pesUsuarioLogado();
    }
  }, []);

  return (
    <header className="absolute bg-cinzaEscuro shadow-lg shadow-black flex h-44 w-screen items-center justify-between font-mono px-6 md:px-10 lg:px-16 xl:px-20">
      <div className="flex items-center">
        <div className="flex items-center">
          <img
            src="../src/Image/logofincash.png"
            alt="Fincash Logo"
            className="w-32 h-auto"
          />
          <span className="text-8xl text-white ml-2 md:ml-4">fincash</span>
        </div>
      </div>

      <nav className="flex items-center">
        {user.nome ? (
          <p className="pr-6 text-lg md:text-2xl lg:text-3xl text-white hidden md:block">
            {user.nome}
          </p>
        ) : (
          <Link to={"/Login"}>
            <button className="transition-all rounded-full bg-amareloPastel mr-4 px-6 py-2 font-mono text-6xl text-black hover:bg-amber-300 text-center">
              Faça seu login
            </button>
          </Link>
        )}

        {user.nome && user.avatar ? (
          <Link to="/perfil">
            <button className="transition-all rounded-full bg-amareloPastel p-5 font-medium text-black hover:bg-amber-300 mr-4">
              <img src={user.avatar} alt="Perfil" className="w-28 h-auto" />
            </button>
          </Link>
        ) : (
          <Link to="/perfil">
            <button className="transition-all rounded-full bg-amareloPastel p-5 font-medium text-black hover:bg-amber-300 mr-4">
              <img
                src="../src/image/perfil.png"
                alt="Perfil"
                className="w-28 h-auto"
              />
            </button>
          </Link>
        )}
      </nav>
    </header>
  );
}
