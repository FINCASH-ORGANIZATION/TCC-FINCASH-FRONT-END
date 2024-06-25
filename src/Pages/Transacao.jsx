// Cartoes.jsx
import { useState } from "react";
import { HeaderHome } from "../header/header.jsx";
import NavigationBar from "../NavBar/NavBar.jsx";
import { CardTransacao } from "../CardPrincipal/CardTransacao.jsx";
import { useForm } from "react-hook-form";
import { Input, Select } from "../input/inputFormShow.jsx";

export default function Cartoes() {
  const [showCardTransacao, setShowCardTransacao] = useState(false);
  const [showFormulario, setShowFormulario] = useState(false);
  const { register, handleSubmit, setValue } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Aqui você pode enviar os dados para onde precisar
  };

  const handleVerTransacoes = () => {
    setShowCardTransacao(true);
    setShowFormulario(false);
  };

  const handleCriarTransacao = () => {
    setShowFormulario(true);
    setShowCardTransacao(false);
  };

  // Opções para o campo "categoria"
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

  // Função para atualizar o valor do campo "categoria" no formulário
  const handleCategoriaChange = (event) => {
    setValue("categoria", event.target.value);
  };

  // Opções para o campo "tipoTransacao"
  const tipoTransacao = ["Receita", "Despesa"];

  const handleTransacaoChange = (event) => {
    setValue("tipoTransacao", event.target.value);
  };

  return (
    <>
      <HeaderHome />
      <div className="bg-cinzaEscuro w-screen h-screen font-mono flex justify-center items-center">
        {!showCardTransacao && !showFormulario && (
          <div className="flex flex-col md:flex-row mt-10 space-y-10 md:space-y-0 md:space-x-10">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <button
                  className="flex flex-col items-center space-x-2 focus:outline-none"
                  onClick={handleCriarTransacao}
                >
                  <img
                    src="../src/Image/mais.png"
                    alt=""
                    className="w-36 md:w-36"
                  />
                  <span className="text-7xl md:text-8xl">
                    Criar Transação
                  </span>
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <div className="bg-white p-6 md:p-10 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <button
                  className="flex flex-col items-center space-x-2 focus:outline-none"
                  onClick={handleVerTransacoes}
                >
                  <img
                    src="../src/Image/moeda.png"
                    alt=""
                    className="w-36 md:w-36"
                  />
                  <span className="text-7xl md:text-8xl">
                    Ver Transações
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
        {showCardTransacao && <CardTransacao />}
        {showFormulario && (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 bg-cinzaClaro1 p-16 rounded-3xl shadow-2xl shadow-black"
          >
            <h2 className="text-7xl text-center mb-4 text-white">Criar Transação</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="number"
                placeholder="Valor"
                name="valor"
                register={register}
              />
              <Input
                type="date"
                placeholder="Data"
                name="data"
                register={register}
              />
              <Input
                type="text"
                placeholder="Descrição"
                name="descricao"
                register={register}
              />
              <div>
                <Select
                  name="categoria"
                  
                  onChange={handleCategoriaChange}
                  register={register}
                >
                  <option value="" disabled hidden>
                    Selecione uma categoria
                  </option>
                  {categorias.map((categoria) => (
                    <option key={categoria} value={categoria}>
                      {categoria}
                    </option>
                  ))}
                </Select>
              </div>
              <div>
                <Select
                  name="tipoTransacao"
                  onChange={handleTransacaoChange}
                  register={register}
                >
                  <option value="" disabled hidden>
                    Tipo da transação
                  </option>
                  {tipoTransacao.map((tipo) => (
                    <option key={tipo} value={tipo}>
                      {tipo}
                    </option>
                  ))}
                </Select>
              </div>
              <Input
                type="text"
                placeholder="Conta"
                name="conta"
                register={register}
              />
            </div>
            <button
              type="submit"
              className="bg-amareloPastel w-full text-7xl p-10 rounded-xl hover:bg-amber-300 mt-4"
            >
              Criar
            </button>
          </form>
        )}
        <NavigationBar />
      </div>
    </>
  );
}
