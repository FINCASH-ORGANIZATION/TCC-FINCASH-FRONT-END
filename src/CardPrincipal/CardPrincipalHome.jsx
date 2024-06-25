import React, { useState, useEffect } from "react";
import {
  puxarReceita,
  puxarDespesa,
  adicionarReceita,
  adicionarDespesa,
} from "../services/despesa&receitaServico";
import { Input } from "../input/inputAdicionar";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function CardPrincipalHome() {
  const [dados, setDados] = useState([]);
  const [offset, setOffset] = useState(0);
  const [carregando, setCarregando] = useState(true);
  const [mostrarFormReceita, setMostrarFormReceita] = useState(false);
  const [mostrarFormDespesa, setMostrarFormDespesa] = useState(false);
  const [novaReceita, setNovaReceita] = useState({
    descricao: "",
    categoria: "",
    valor: 0,
    data: new Date().toISOString().substr(0, 10),
  });
  const [novaDespesa, setNovaDespesa] = useState({
    descricao: "",
    categoria: "",
    valor: 0,
    data: new Date().toISOString().substr(0, 10),
  });

  const {
    register: registerReceita,
    handleSubmit: handleAdicionarReceitaForm,
    // formState: { errors: errorsReceita },
  } = useForm({
    resolver: zodResolver(),
  });

  const {
    register: registerDespesa,
    handleSubmit: handleAdicionarDespesaForm,
    // formState: { errors: errorsDespesa },
  } = useForm({
    resolver: zodResolver(),
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const responseReceitas = await puxarReceita();
        const responseDespesas = await puxarDespesa();

        const receitas = Array.isArray(responseReceitas.results)
          ? responseReceitas.results.map((item) => ({ ...item, receita: true }))
          : [];
        const despesas = Array.isArray(responseDespesas.results)
          ? responseDespesas.results.map((item) => ({
              ...item,
              receita: false,
            }))
          : [];

        const dadosCombinados = [...receitas, ...despesas].sort(
          (a, b) => new Date(b.data) - new Date(a.data)
        );
        setDados(dadosCombinados);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setCarregando(false);
      }
    }
    fetchData();
  }, []);

  // Função para formatar o valor em formato monetário brasileiro
  const formatarValor = (valor) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valor);
  };

  // Função para abrir formulário/modal de nova receita
  const abrirFormularioReceita = () => {
    setMostrarFormReceita(true);
  };

  // Função para abrir formulário/modal de nova despesa
  const abrirFormularioDespesa = () => {
    setMostrarFormDespesa(true);
  };

  // Função para fechar formulário/modal
  const fecharFormulario = () => {
    setMostrarFormReceita(false);
    setMostrarFormDespesa(false);
  };

  // Função para adicionar uma nova receita
  const handleAdicionarReceita = async () => {
    try {
      await adicionarReceita(novaReceita);
      fecharFormulario();
      await atualizarDados();
    } catch (error) {
      console.error("Erro ao adicionar receita:", error);
    }
  };

  // Função para adicionar uma nova despesa
  const handleAdicionarDespesa = async () => {
    try {
      await adicionarDespesa(novaDespesa);
      fecharFormulario();
      await atualizarDados();
    } catch (error) {
      console.error("Erro ao adicionar despesa:", error);
    }
  };

  // Função para atualizar os dados após adicionar receita ou despesa
  const atualizarDados = async () => {
    try {
      const responseReceitas = await puxarReceita();
      const responseDespesas = await puxarDespesa();

      const receitas = Array.isArray(responseReceitas.results)
        ? responseReceitas.results.map((item) => ({ ...item, receita: true }))
        : [];
      const despesas = Array.isArray(responseDespesas.results)
        ? responseDespesas.results.map((item) => ({
            ...item,
            receita: false,
          }))
        : [];

      const dadosAtualizados = [...receitas, ...despesas].sort(
        (a, b) => new Date(b.data) - new Date(a.data)
      );
      setDados(dadosAtualizados);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  return (
    <div className="bg-cinzaClaro2 absolute w-9/12 h-6/12 mt-96 shadow-2xl shadow-black flex justify-center rounded-3xl">
      <div className="bg-cinzaClaro2 w-full rounded-3xl">
        <div className="bg-cinzaClaro2 shadow-md rounded-3xl p-8">
          {carregando ? (
            <div className="flex items-center justify-center">
              <div className="loader border-r-2 rounded-full border-yellow-500 bg-yellow-300 animate-spin h-8 w-8 mr-3"></div>
              <p className="text-3xl text-yellow-700">Carregando...</p>
            </div>
          ) : (
            <>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-left text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-white">
                    <th className="px-4 py-4 sm:px-6 sm:py-6 text-6xl">Data</th>
                    <th className="px-4 py-4 sm:px-6 sm:py-6 text-6xl">
                      Descrição
                    </th>
                    <th className="px-4 py-4 sm:px-6 sm:py-6 text-6xl">
                      Categoria
                    </th>
                    <th className="px-4 py-4 sm:px-6 sm:py-6 text-6xl">
                      Valor
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white text-gray-900">
                  {dados.length === 0 ? (
                    <tr>
                      <td
                        className="px-4 py-4 text-center text-6xl"
                        colSpan="4"
                      >
                        O usuário ainda não cadastrou nenhuma despesa nem
                        receita.
                      </td>
                    </tr>
                  ) : (
                    dados.slice(offset, offset + 5).map((item) => (
                      <tr
                        key={item.id}
                        className="hover:bg-gray-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl rounded-lg"
                      >
                        <td className="px-4 py-4">
                          {new Date(item.data).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-4">
                          {item.descricao ? item.descricao : "Não há descrição"}
                        </td>
                        <td className="px-4 py-4">{item.categoria}</td>
                        <td className="px-4 py-4">
                          <span
                            className={
                              item.receita ? "text-green-600" : "text-red-600"
                            }
                          >
                            {item.receita ? "+" : "-"}{" "}
                            <span className={carregando ? "animate-pulse" : ""}>
                              {formatarValor(Math.abs(item.valor))}
                            </span>
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setOffset(Math.max(offset - 5, 0))}
                  className="bg-blue-500 text-white p-5 text-5xl rounded-lg hover:bg-blue-600"
                  disabled={offset === 0}
                >
                  Voltar
                </button>
                <button
                  onClick={() => setOffset(offset + 5)}
                  className="bg-blue-500 text-white p-5 text-5xl rounded-lg hover:bg-blue-600"
                  disabled={offset + 5 >= dados.length}
                >
                  Próximo
                </button>
                <button
                  onClick={abrirFormularioReceita}
                  className="bg-green-500 text-white p-5 text-5xl rounded-lg hover:bg-green-600"
                >
                  Adicionar Receita
                </button>
                <button
                  onClick={abrirFormularioDespesa}
                  className="bg-red-500 text-white p-5 text-5xl rounded-lg hover:bg-red-600"
                >
                  Adicionar Despesa
                </button>
              </div>
              {/* Formulário para adicionar nova receita */}
              {mostrarFormReceita && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">
                      Nova Receita
                    </h2>
                    <form
                      onSubmit={handleAdicionarReceitaForm(
                        handleAdicionarReceita
                      )}
                    >
                      <div className="mb-4">
                        <p>Valor</p>
                        <Input
                          type="text"
                          name="descricao"
                          register={registerReceita}
                          value={novaReceita.valor}
                          onChange={(e) =>
                            setNovaReceita({
                              ...novaReceita,
                              descricao: e.target.value,
                            })
                          }
                          className="w-full border-gray-300 rounded-lg p-3"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="categoria"
                          className="block text-gray-700 text-xl font-medium mb-2"
                        >
                          Data
                        </label>
                        descricao, categoria,
                        <Input
                          type="numb"
                          name="data"
                          value={novaReceita.data}
                          onChange={(e) =>
                            setNovaReceita({
                              ...novaReceita,
                              data: e.target.value,
                            })
                          }
                          className="w-full border-gray-300 rounded-lg p-3"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="valor"
                          className="block text-gray-700 text-xl font-medium mb-2"
                        >
                          Descrição
                        </label>
                        <Input
                          type="number"
                          name="descricao"
                          value={novaReceita.descricao}
                          onChange={(e) =>
                            setNovaReceita({
                              ...novaReceita,
                              descricao: e.target.value,
                            })
                          }
                          className="w-full border-gray-300 rounded-lg p-3"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="data"
                          className="block text-gray-700 text-xl font-medium mb-2"
                        >
                          Categoria
                        </label>
                        <input
                          type="categoria"
                          id="data"
                          value={novaReceita.categoria}
                          onChange={(e) =>
                            setNovaReceita({
                              ...novaReceita,
                              categoria: e.target.value,
                            })
                          }
                          className="w-full border-gray-300 rounded-lg p-3"
                          required
                        />
                      </div>
                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={fecharFormulario}
                          className="bg-gray-300 text-gray-700 p-3 rounded-lg mr-2 hover:bg-gray-400"
                        >
                          Cancelar
                        </button>
                        <button
                          type="submit"
                          className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600"
                        >
                          Adicionar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}

              {/* Formulário para adicionar nova despesa */}
              {mostrarFormDespesa && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
                  <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4">
                      Nova Despesa
                    </h2>
                    <form
                      onSubmit={handleAdicionarDespesaForm(
                        handleAdicionarDespesa
                      )}
                    >
                      <div className="mb-4">
                        <Input
                          htmlFor="descricao"
                          className="block text-gray-700 text-xl font-medium mb-2"
                        >
                          Valor
                        </Input>
                        <input
                          type="text"
                          id="descricao"
                          value={novaDespesa.valor}
                          onChange={(e) =>
                            setNovaDespesa({
                              ...novaDespesa,
                              descricao: e.target.value,
                            })
                          }
                          className="w-full border-gray-300 rounded-lg p-3"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="categoria"
                          className="block text-gray-700 text-xl font-medium mb-2"
                        >
                          Categoria
                        </label>
                        <Input
                          type="text"
                          name="data"
                          value={novaDespesa.data}
                          onChange={(e) =>
                            setNovaDespesa({
                              ...novaDespesa,
                              data: e.target.value,
                            })
                          }
                          className="w-full border-gray-300 rounded-lg p-3"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="valor"
                          className="block text-gray-700 text-xl font-medium mb-2"
                        >
                          Valor
                        </label>
                        <input
                          type="text"
                          name="descricao"
                          value={novaDespesa.descricao}
                          onChange={(e) =>
                            setNovaDespesa({
                              ...novaDespesa,
                              descricao: e.target.value,
                            })
                          }
                          className="w-full border-gray-300 rounded-lg p-3"
                          required
                        />
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="data"
                          className="block text-gray-700 text-xl font-medium mb-2"
                        >
                          Data
                        </label>
                        <input
                          type="text"
                          name="categoria"
                          value={novaDespesa.categoria}
                          onChange={(e) =>
                            setNovaDespesa({
                              ...novaDespesa,
                              categoria: e.target.value,
                            })
                          }
                          className="w-full border-gray-300 rounded-lg p-3"
                          required
                        />
                      </div>
                      <div className="flex justify-end">
                        <button
                          type="button"
                          onClick={fecharFormulario}
                          className="bg-gray-300 text-gray-700 p-3 rounded-lg mr-2 hover:bg-gray-400"
                        >
                          Cancelar
                        </button>
                        <button
                          type="submit"
                          className="bg-red-500 text-white p-3 rounded-lg hover:bg-red-600"
                        >
                          Adicionar
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
