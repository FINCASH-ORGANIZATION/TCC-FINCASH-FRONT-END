import { useState, useEffect } from "react";
import { HeaderHome } from "../header/header.jsx";
import { UsuarioLogado, atualizarUsuario } from "../services/usuarioServico.js";
import { Input } from "../input/input.jsx";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { perfilSchema } from "../Schema/perfilSchema.js";

export default function Perfil() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(perfilSchema),
  });

  const [user, setUsuario] = useState(null); // Inicializado como null para evitar erros iniciais
  const [editando, setEditando] = useState(false); // Estado para controlar se o usuário está editando

  // Estados para os campos de edição
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [avatar, setAvatar] = useState("");

  async function pesUsuarioLogado() {
    try {
      const response = await UsuarioLogado();
      setUsuario(response.data.usuario);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (Cookies.get("token")) {
      pesUsuarioLogado();
    }
  }, []);

  function Deslogar() {
    Cookies.remove("token");
    setUsuario(null); // Reinicializa user para evitar acessos após deslogar
    navigate("/");
  }

  // Função para lidar com o envio do formulário de atualização
  const onSubmit = async (data) => {
    try {
      const response = await atualizarUsuario(data); // Chama a função do serviço para atualizar o usuário
      console.log(response);
      setEditando(false);
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
    }
  };

  // Função para alternar entre modo de edição e visualização
  const toggleEdicao = () => {
    setEditando(!editando);
    // Preenche os campos de edição com os dados atuais do usuário ao entrar no modo de edição
    if (user) {
      setNome(user.nome);
      setSobrenome(user.sobrenome);
      setAvatar(user.avatar || ""); // Se o usuário não tiver avatar, deixa vazio inicialmente
    }
  };

  return (
    <>
      <HeaderHome />
      <div className="bg-cinzaEscuro w-screen h-screen font-mono flex flex-col items-center justify-center">
        <div className="bg-cinzaClaro1 flex flex-col justify-center items-center p-6 md:p-10 rounded-3xl shadow-2xl shadow-black transition-transform duration-500 transform hover:scale-105">
          <button className="transition-all rounded-full bg-amareloPastel p-3 font-medium text-black hover:bg-amber-300 mb-4">
            {user && user.avatar ? (
              <img
                src={user.avatar}
                alt=""
                className="w-24 h-24 rounded-full"
              />
            ) : (
              <img
                src="./src/Image/perfil.png"
                alt="imagem de perfil"
                className="w-24 h-24 rounded-full"
              />
            )}
          </button>

          {!editando ? (
            <div className="grid grid-cols-1 gap-4 mb-4 text-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-quaseBranco mb-2">
                  Nome
                </h2>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cinzaClaro2">
                  {user && `${user.nome} ${user.sobrenome}`}
                </h3>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-quaseBranco mb-2">
                  Endereço de email
                </h2>
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cinzaClaro2">
                  {user && user.email}
                </h3>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit(onSubmit)} // Passa a função de submissão do react-hook-form
              className="grid grid-cols-1 gap-4 mb-4 text-center"
            >
              <div>
                <Input
                  name="nome"
                  type="text"
                  onChange={(e) => setNome(e.target.value)}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cinzaClaro2 p-2 border-b-2 border-cinzaClaro2 bg-transparent"
                  placeholder="Nome"
                  required
                  register={register} // Adicione o register como propriedade
                />
              </div>
              <div>
                <Input
                  name="sobrenome"
                  type="text"
                  onChange={(e) => setSobrenome(e.target.value)}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cinzaClaro2 p-2 border-b-2 border-cinzaClaro2 bg-transparent"
                  placeholder="Sobrenome"
                  required
                  register={register} // Adicione o register como propriedade
                />
              </div>
              <div>
                <Input
                  name="avatar"
                  type="text"
                  onChange={(e) => setAvatar(e.target.value)}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-cinzaClaro2 p-2 border-b-2 border-cinzaClaro2 bg-transparent"
                  placeholder="URL do Avatar (opcional)"
                  register={register} // Adicione o register como propriedade
                />
              </div>
              <button
                type="submit"
                className="w-full bg-neutral-400 text-xl sm:text-2xl md:text-3xl font-bold font-mono px-4 py-2 rounded-lg transition-all transform hover:bg-cinzaClaro6 hover:scale-105"
              >
                Atualizar Dados
              </button>
            </form>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full mt-4">
            <Link to="/home" className="w-full">
              <button
                className="w-full text-black bg-green-600 text-xl sm:text-2xl md:text-3xl font-bold font-mono px-4 py-2 rounded-lg transition-all transform hover:scale-105"
                type="button" // Corrigido para type="button"
              >
                Voltar
              </button>
            </Link>

            {!editando ? (
              <button
                className="w-full bg-azulclaro text-xl sm:text-2xl md:text-3xl font-bold font-mono px-4 py-2 rounded-lg transition-all transform hover:scale-105"
                type="button" // Corrigido para type="button"
                onClick={toggleEdicao}
              >
                Editar
              </button>
            ) : null}

            <button
              className="w-full bg-red-500 text-xl sm:text-2xl md:text-3xl font-bold font-mono px-4 py-2 rounded-lg transition-all transform hover:scale-105"
              type="button" // Corrigido para type="button"
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
