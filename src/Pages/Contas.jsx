import { useState } from "react";
import { HeaderHome } from "../header/header.jsx";
import NavigationBar from "../NavBar/NavBar.jsx";
import MostrarContas from "../CardPrincipal/MostrarContas.jsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { criarConta } from "../services/contaServico.js";
import { contaSchema } from "../Schema/contSchema.js";
import { Input } from "../input/input.jsx";
import { toast } from "react-toastify";

const Contas = () => {
  const { handleSubmit: handleSubmitForm, register } = useForm({
    resolver: zodResolver(contaSchema),
  });

  const [mostrarMostrarContas, setMostrarMostrarContas] = useState(false);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [contaSelecionada, setContaSelecionada] = useState(null); // Armazena apenas o nome do banco selecionado
  const [contasDropdownAberto, setContasDropdownAberto] = useState(false);

  // Lista de categorias predefinidas
  const categorias = [
    "Salário",
    "Alimentação",
    "Transporte",
    "Saúde",
    "Educação",
    "Lazer e entretenimento",
    "Viagens",
    "Emergências",
    "Outros",
  ];

  const handleMostrarMostrarContas = () => {
    setMostrarMostrarContas(true);
    setMostrarFormulario(false);
  };

  const handleMostrarFormulario = () => {
    setMostrarFormulario(true);
    setMostrarMostrarContas(false);
  };

  async function onSubmit(data) {
    try {
      // Verifica se uma conta está selecionada
      if (!contaSelecionada) {
        toast.error("Você precisa selecionar uma conta.");
        return;
      }

      // Verifica se uma categoria está selecionada
      if (!data.categoria) {
        toast.error("Você precisa selecionar uma categoria.");
        return;
      }

      // Adiciona o nome do banco selecionado aos dados a serem enviados
      data.banco = contaSelecionada;

      const response = await criarConta(data);
      toast.success("Conta criada com sucesso!");
      console.log("Dados da resposta:", response);

      setContaSelecionada(null);
    } catch (error) {
      toast.error("Erro ao criar conta, tente novamente!");
    }
  }

  const toggleContasDropdown = () => {
    setContasDropdownAberto(!contasDropdownAberto);
  };

  const selecionarConta = (conta) => {
    setContaSelecionada(conta.nome); // Armazena apenas o nome do banco selecionado
    setContasDropdownAberto(false); // Fecha o dropdown após selecionar a conta
  };

  return (
    <>
      <HeaderHome />
      <div className="bg-cinzaEscuro min-h-screen flex flex-col items-center justify-center font-mono">
        {mostrarMostrarContas && <MostrarContas />}

        {mostrarFormulario && (
          <form
            onSubmit={handleSubmitForm(onSubmit)}
            className="w-full max-w-2xl p-4 bg-white rounded-lg shadow-lg"
          >
            <div className="relative mb-6">
              <h2 className="text-3xl font-bold mb-4">
                Escolha uma conta para o cartão
              </h2>
              <button
                type="button"
                className="bg-gray-200 flex items-center justify-between w-full px-4 py-2 rounded-lg focus:outline-none"
                onClick={toggleContasDropdown}
              >
                {contaSelecionada ? (
                  <>
                    <img
                      src={contaSelecionada.imagem}
                      className="rounded-full w-10 h-10 md:w-12 md:h-12 mr-2"
                      alt={`${contaSelecionada.nome}, `}
                    />
                    <span className="text-xl md:text-2xl">
                      {contaSelecionada.nome}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="text-xl md:text-2xl">
                      Escolha uma conta para o cartão
                    </span>
                    <img
                      src="../src/Image/seta1.png"
                      className="w-6 md:w-8"
                      alt="Seta para baixo"
                    />
                  </>
                )}
              </button>

              <Input
                type="hidden"
                name="conta"
                value={contaSelecionada || ""}
                register={register}
              />

              {contasDropdownAberto && (
                <div className="absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-lg">
                  <ul className="text-xl md:text-2xl">
                    <li
                      className="py-2 px-4 hover:bg-gray-200 cursor-pointer flex items-center justify-between"
                      onClick={() =>
                        selecionarConta({
                          nome: "Banco do Brasil",
                          imagem: "../src/Image/bb.png",
                        })
                      }
                    >
                      <img
                        src="../src/Image/bb.png"
                        alt="Logo Banco do Brasil"
                        className="rounded-full w-10 h-10 md:w-12 md:h-12 mr-2"
                      />
                      Banco do Brasil
                    </li>
                    {/* Adicione aqui os outros bancos conforme necessário */}
                  </ul>
                </div>
              )}
            </div>

            {/* Campo para selecionar a categoria */}
            <div className="mb-6">
              <label htmlFor="categoria" className="text-xl font-bold mb-2 block">
                Categoria:
              </label>
              <select
                id="categoria"
                name="categoria"
                className="block w-full px-3 py-2 rounded-md bg-white border border-gray-300 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-xl md:text-2xl"
                {...register("categoria")}
              >
                <option value="" disabled hidden>
                  Selecione uma categoria
                </option>
                {categorias.map((categoria) => (
                  <option key={categoria} value={categoria}>
                    {categoria}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="bg-gray-200 hover:bg-gray-300 text-xl md:text-2xl text-black font-bold py-3 px-6 rounded-lg w-full mt-4 transition duration-300"
            >
              Adicionar Conta
            </button>
          </form>
        )}

        {!mostrarMostrarContas && !mostrarFormulario && (
          <div className="flex flex-col md:flex-row mt-10 space-y-6 md:space-y-0 md:space-x-6">
            <div className="flex flex-col items-center">
              <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <button
                  className="flex items-center space-x-2 focus:outline-none"
                  onClick={handleMostrarFormulario}
                >
                  <img
                    src="../src/Image/mais.png"
                    alt=""
                    className="w-12 md:w-16"
                  />
                  <span className="text-xl md:text-2xl font-bold">
                    Adicionar Conta
                  </span>
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <button
                  className="flex items-center space-x-2 focus:outline-none"
                  onClick={handleMostrarMostrarContas}
                >
                  <img
                    src="../src/Image/bank.png"
                    alt=""
                    className="w-12 md:w-16"
                  />
                  <span className="text-xl md:text-2xl font-bold">
                    Ver Contas
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
};

export default Contas;
