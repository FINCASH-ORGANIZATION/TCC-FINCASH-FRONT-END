import { useState, useEffect } from "react";
import { HeaderHome } from "../header/header.jsx";
import { UsuarioLogado, atualizarUsuario } from "../services/usuarioServico.js";
import { Input } from "../input/input.jsx";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { perfilSchema } from "../Schema/perfilSchema.js";
import NavigationBar from "../NavBar/NavBar.jsx";

export default function Perfil() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(perfilSchema),
  });

  const [user, setUsuario] = useState(null);
  const [editando, setEditando] = useState(false);
  const [animateMoeda, setAnimateMoeda] = useState(false); // Estado para controlar a animação da moeda

  async function fetchUsuarioLogado() {
    try {
      const response = await UsuarioLogado();
      console.log("Usuário logado:", response.data.usuario);
      setUsuario(response.data.usuario);
    } catch (error) {
      console.error("Erro ao buscar usuário logado:", error);
    }
  }

  useEffect(() => {
    if (Cookies.get("token")) {
      console.log("Token encontrado nos cookies. Buscando usuário logado...");
      fetchUsuarioLogado();
    } else {
      console.log("Token não encontrado nos cookies. Usuário não autenticado.");
    }
  }, []);

  const onSubmitAtualizar = async (data) => {
    try {
      console.log("Dados enviados para atualização:", data);
      const response = await atualizarUsuario(data);
      console.log("Resposta da atualização:", response);
      setEditando(false);
      fetchUsuarioLogado();
      setAnimateMoeda(true); // Ativar animação da moeda ao atualizar
      setTimeout(() => setAnimateMoeda(false), 1000); // Desativar após 1 segundo
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  };

  const toggleEdicao = () => {
    setEditando(!editando);
    console.log("Modo de edição alterado. Editando:", !editando);
    setAnimateMoeda(true); // Ativar animação da moeda ao entrar no modo de edição
  };

  const handleLogout = () => {
    Cookies.remove("token");
    setUsuario(null);
    navigate("/");
    console.log("Usuário desconectado. Redirecionando para a página inicial.");
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const fecharFormulario = () => {
    setEditando(false);
  };

  return (
    <>
      <HeaderHome />
      <div className="bg-cinzaEscuro w-screen h-screen font-mono flex flex-col items-center justify-center">
        <div className="bg-cinzaClaro1 flex flex-col justify-center items-center p-6 md:p-20 rounded-3xl shadow-2xl shadow-black transition-transform duration-500 transform hover:scale-105">
          <button className="transition-all rounded-full bg-amareloPastel p-8 font-medium text-black hover:bg-amber-300 mb-4">
            {user && user.avatar ? (
              <img
                src={user.avatar}
                alt=""
                className="w-44 h-44"
              />
            ) : (
              <img
                src="./src/Image/perfil.png"
                alt="imagem de perfil"
                className="w-44 h-44"
              />
            )}
          </button>

          {!editando ? (
            <div className="grid grid-cols-1 gap-4 mb-4 text-center">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-quaseBranco mb-2">
                  Nome
                </h2>
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cinzaClaro2">
                  {user && `${user.nome} ${user.sobrenome}`}
                </h3>
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-quaseBranco mb-2">
                  Endereço de email
                </h2>
                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cinzaClaro2">
                  {user && user.email}
                </h3>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmitAtualizar)}
              className="grid grid-cols-1 gap-4 mb-4 text-center"
            >
              <div>
                <Input
                  name="nome"
                  type="text"
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-cinzaClaro2 p-2 border-b-2 border-cinzaClaro2 bg-transparent"
                  placeholder="Nome"
                  register={register}
                />
              </div>
              <div>
                <Input
                  name="sobrenome"
                  type="text"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cinzaClaro2 p-2 border-b-2 border-cinzaClaro2 bg-transparent"
                  placeholder="Sobrenome"
                  register={register}
                />
              </div>
              <div>
                <Input
                  name="avatar"
                  type="text"
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cinzaClaro2 p-2 border-b-2 border-cinzaClaro2 bg-transparent"
                  placeholder="URL do Avatar (opcional)"
                  register={register}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-4xl sm:text-5xl md:text-6xl font-bold text-white font-mono p-5 rounded-lg transition-all transform hover:bg-green-600 hover:scale-105"
              >
                Atualizar Dados
              </button>
            </form>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-1 gap-2 w-full mt-4">
            {!editando ? (
              <button
                className="w-full bg-azulclaro text-4xl sm:text-5xl md:text-6xl text-white font-bold font-mono p-5 rounded-lg transition-all transform hover:bg-sky-600 hover:scale-105"
                type="button"
                onClick={toggleEdicao}
              >
                Editar
              </button>
            ) : null}

            <button
              className={`w-full bg-red-500 text-4xl sm:text-5xl md:text-6xl text-white font-bold font-mono p-5 rounded-lg transition-all transform hover:bg-red-600 hover:scale-105 ${
                animateMoeda ? "animate-moeda" : ""
              }`}
              type="button"
              onClick={handleLogout}
            >
              Sair
            </button>
          </div>
        </div>
        <NavigationBar />
      </div>
    </>
  );
}
