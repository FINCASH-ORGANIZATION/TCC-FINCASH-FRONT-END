import { useState } from "react";
import { Input } from "../input/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { criarCartao } from "../services/cartaoServico.js";
import { AddCartãoSchema } from "../Schema/AddCartãoSchema.js";
import { useNavigate } from "react-router-dom";
import "./css/AddCartao.css";

export default function AddCartao() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(AddCartãoSchema),
  });

  const [contaSelecionada, setContaSelecionada] = useState(null);
  const [contasDropdownAberto, setContasDropdownAberto] = useState(false);

  async function onSubmit(data) {
    if (contaSelecionada) {
      data.conta = contaSelecionada.nome; // Envia apenas o nome da conta selecionada
    }
    const response = await criarCartao(data);
    navigate("/home");
    console.log(response);
    return response;
  }

  const toggleContasDropdown = () => {
    setContasDropdownAberto(!contasDropdownAberto);
  };

  const selecionarConta = (conta) => {
    setContaSelecionada(conta);
    setContasDropdownAberto(false); // Fecha o dropdown após selecionar a conta
  };
<<<<<<< HEAD
=======

>>>>>>> 84f48fa3fa2067650e7ac6ebb6b944dec7bfec2e
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-9xl text-white">Cartões de Crédito</span>
      <div className="card bg-white w-full px-6 py-8 mt-5 shadow-2xl rounded-3xl shadow-black flex flex-col items-center">
        <span className="text-7xl mt-10">Novo cartão</span>

        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <Input
            name="valor"
            type="text" // Alterado para text para permitir formatação personalizada
            className="InputPrincipal"
            placeholder="R$0,00"
            register={register}
          />

          <br />
          <Input
            name="descricao"
            className="Input"
            type="text"
            placeholder="Descrição"
            register={register}
          />

          <Input
            name="limite"
            className="Input"
            type="text" // Alterado para text para permitir formatação personalizada
            placeholder="Limite do cartão"
            register={register}
          />

          <div className="relative w-full">
            <h2 className="text-4xl my-5">Fechamento</h2>
            <Input
              name="fechamento"
              className="Input"
              type="string"
              placeholder="Data de fechamento"
              register={register}
            />

            <h2 className="text-4xl my-5">Vencimento</h2>
            <Input
              name="vencimento"
              className="Input"
              type="number"
              placeholder="Data de vencimento"
              register={register}
            />

            <br />
            <span className="text-6xl text-cinzaClaro2 font-semibold">
              Escolha uma conta para o cartão
            </span>
            <button
              type="button" // Alterado de submit para button
              className="bg-neutral-400 flex justify-between items-center w-full p-5 mt-10 rounded-3xl hover:bg-cinzaClaro6"
              onClick={toggleContasDropdown}
            >
              {contaSelecionada ? (
                <>
                  <img
                    src={contaSelecionada.imagem}
                    className="rounded-full w-16 md:w-24 lg:w-32"
                    alt={`Logo ${contaSelecionada.nome}`}
                  />
                  <span className="text-6xl ml-4">{contaSelecionada.nome}</span>
                </>
              ) : (
                <>
                  <span className="text-6xl">
                    Escolha uma conta para o cartão
                  </span>
                  <img
                    src="../src/Image/seta1.png"
                    className="w-8 md:w-10"
                    alt="Seta para baixo"
                  />
                </>
              )}
            </button>

            <Input
              type="hidden"
              name="conta"
              register={register} // Garante que o valor seja registrado no formulário
              value={contaSelecionada?.nome || ""} // Valor da conta selecionada
            />

            {contasDropdownAberto && (
              <div
                className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50 transition-opacity"
                onClick={toggleContasDropdown}
              >
                <ul className="bg-white w-4/12 text-7xl p-20 rounded-3xl shadow-xl">
                  <li
                    className="py-2 px-4 hover:bg-gray-200 cursor-pointer flex justify-between items-center"
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
                      className="rounded-full w-24 mr-2"
                    />
                    Banco do Brasil
                    <img src="../src/Image/seta1.png" alt="" className="w-12" />
                  </li>
                  <li
                    className="py-2 px-4 hover:bg-gray-200 cursor-pointer flex justify-between items-center"
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
                      className="rounded-full w-24 mr-2"
                    />
                    Nubank
                    <img src="../src/Image/seta1.png" alt="" className="w-12" />
                  </li>
                  <li
                    className="py-2 px-4 hover:bg-gray-200 cursor-pointer flex justify-between items-center"
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
                      className="rounded-full w-24 mr-2"
                    />
                    Bradesco
                    <img src="../src/Image/seta1.png" alt="" className="w-12" />
                  </li>
                  <li
                    className="py-2 px-4 hover:bg-gray-200 cursor-pointer flex justify-between items-center"
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
                      className="rounded-full w-24 mr-2"
                    />
                    Itaú
                    <img src="../src/Image/seta1.png" alt="" className="w-12" />
                  </li>
                  <li
                    className="py-2 px-4 hover:bg-gray-200 cursor-pointer flex justify-between items-center"
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
                      className="rounded-full w-24 mr-2"
                    />
                    Santander
                    <img src="../src/Image/seta1.png" alt="" className="w-12" />
                  </li>
                  <li
                    className="py-2 px-4 hover:bg-gray-200 cursor-pointer flex justify-between items-center"
                    onClick={() =>
                      selecionarConta({
                        nome: "Caixa",
                        imagem: "../src/Image/caixa.png",
                      })
                    }
                  >
                    <img
                      src="../src/Image/caixa.png"
                      alt="Logo Caixa Econômica"
                      className="rounded-full w-24 mr-2"
                    />
                    Caixa Econômica
                    <img src="../src/Image/seta1.png" alt="" className="w-12" />
                  </li>
                  <li
                    className="py-2 px-4 hover:bg-gray-200 cursor-pointer flex justify-between items-center"
                    onClick={() =>
                      selecionarConta({
                        nome: "Banco Inter",
                        imagem: "../src/Image/intermedium.png",
                      })
                    }
                  >
                    <img
                      src="../src/Image/intermedium.png"
                      alt="Logo Banco Inter"
                      className="rounded-full w-24 mr-2"
                    />
                    Banco Inter
                    <img src="../src/Image/seta1.png" alt="" className="w-12" />
                  </li>
                </ul>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="bg-neutral-400 flex justify-between items-center w-full p-5 mt-10 rounded-3xl hover:bg-cinzaClaro6 transition duration-300"
          >
            <span className="text-6xl mx-auto">Adicionar Cartão</span>
          </button>
          {/* Input oculto para enviar o nome da conta selecionada */}
        </form>
      </div>
    </div>
  );
}
