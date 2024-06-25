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
            className="w-full max-w-7xl bg-cinzaClaro1 p-20 rounded-3xl shadow-2xl shadow-black"
          >
            <div className="relative mb-6">
              <h2 className="text-6xl text-white mb-4">
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
                    <span className="text-5xl md:text-5xl my-6">
                      Escolha uma conta para o cartão
                    </span>
                    <img
                      src="../src/Image/seta1.png"
                      className="w-8 md:w-8"
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
                    {/*Banco Do Brasil*/}
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
                        className="rounded-full w-20 h-20 md:w-20 md:h-20 mr-2"
                      />
                      <span className="text-5xl" >Banco do Brasil</span>
                    </li>
                    {/*Caixa*/}
                    <li
                      className="py-2 px-4 hover:bg-gray-200 cursor-pointer flex items-center justify-between"
                      onClick={() =>
                        selecionarConta({
                          nome: "Caixa",
                          imagem: "../src/Image/caixa.png",
                        })
                      }
                    >
                      <img
                        src="../src/Image/caixa.png"
                        alt="Logo Caixa"
                        className="rounded-full w-20 h-20 md:w-20 md:h-20 mr-2"
                      />
                      <span className="text-5xl" >Caixa</span>
                    </li>
                    {/*Bradesco*/}
                    <li
                      className="py-2 px-4 hover:bg-gray-200 cursor-pointer flex items-center justify-between"
                      onClick={() =>
                        selecionarConta({
                          nome: "Bradesco",
                          imagem: "../src/Image/bradesco.png",
                        })
                      }
                    >
                      <img
                        src="../src/Image/bradesco.png"
                        alt="Logo Bradesco"
                        className="rounded-full w-20 h-20 md:w-20 md:h-20 mr-2"
                      />
                      <span className="text-5xl" >Bradesco</span>
                    </li>
                    {/*Santander*/}
                    <li
                      className="py-2 px-4 hover:bg-gray-200 cursor-pointer flex items-center justify-between"
                      onClick={() =>
                        selecionarConta({
                          nome: "Santander",
                          imagem: "../src/Image/santander.png",
                        })
                      }
                    >
                      <img
                        src="../src/Image/santander.png"
                        alt="Logo Santander"
                        className="rounded-full w-20 h-20 md:w-20 md:h-20 mr-2"
                      />
                      <span className="text-5xl" >Santander</span>
                    </li>
                    {/*Itaú*/}
                    <li
                      className="py-2 px-4 hover:bg-gray-200 cursor-pointer flex items-center justify-between"
                      onClick={() =>
                        selecionarConta({
                          nome: "Itaú",
                          imagem: "../src/Image/itau.png",
                        })
                      }
                    >
                      <img
                        src="../src/Image/itau.png"
                        alt="Logo Itaú"
                        className="rounded-full w-20 h-20 md:w-20 md:h-20 mr-2"
                      />
                      <span className="text-5xl" >Itaú</span>
                    </li>
                    {/*Nubank*/}
                    <li
                      className="py-2 px-4 hover:bg-gray-200 cursor-pointer flex items-center justify-between"
                      onClick={() =>
                        selecionarConta({
                          nome: "Nubank",
                          imagem: "../src/Image/nubank.png",
                        })
                      }
                    >
                      <img
                        src="../src/Image/nubank.png"
                        alt="Logo Nubank"
                        className="rounded-full w-20 h-20 md:w-20 md:h-20 mr-2"
                      />
                      <span className="text-5xl" >Nubank</span>
                    </li>
                    {/*Inter*/}
                    <li
                      className="py-2 px-4 hover:bg-gray-200 cursor-pointer flex items-center justify-between"
                      onClick={() =>
                        selecionarConta({
                          nome: "Inter",
                          imagem: "../src/Image/intermedium.png",
                        })
                      }
                    >
                      <img
                        src="../src/Image/intermedium.png"
                        alt="Logo Inter"
                        className="rounded-full w-20 h-20 md:w-20 md:h-20 mr-2"
                      />
                      <span className="text-5xl" >Inter</span>
                    </li>
                    {/* Adicione aqui os outros bancos conforme necessário */}
                  </ul>
                </div>
              )}
            </div>

            <button
              type="submit"
              className="bg-amareloPastel hover:bg-amber-300 text-5xl md:text-5xl text-black px-6 py-10 rounded-lg w-full mt-4  transition duration-300"
            >
              Adicionar Conta
            </button>
          </form>
        )}

        {!mostrarMostrarContas && !mostrarFormulario && (
          <div className="flex flex-col md:flex-row mt-10 space-y-6 md:space-y-0 md:space-x-6">
            <div className="flex items-center">
              <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <button
                  className="flex flex-col items-center space-x-2 focus:outline-none"
                  onClick={handleMostrarFormulario}
                >
                  <img
                    src="../src/Image/mais.png"
                    alt=""
                    className="w-36 md:w-36"
                  />
                  <span className="text-7xl md:text-8xl">
                    Adicionar Conta
                  </span>
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <button
                  className="flex flex-col items-center space-x-2 focus:outline-none"
                  onClick={handleMostrarMostrarContas}
                >
                  <img
                    src="../src/Image/banco.png"
                    alt=""
                    className="w-36 md:w-36"
                  />
                  <span className="text-7xl md:text-8xl">
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
