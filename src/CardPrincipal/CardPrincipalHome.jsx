import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { receitaSchema, despesaSchema } from "../Schema/despesa&receitaSchema";
import { useState, useEffect } from "react";
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
    formState: { errors: errorsReceita },
  } = useForm({
    resolver: zodResolver(receitaSchema),
  });

  const {
    register: registerDespesa,
    handleSubmit: handleAdicionarDespesaForm,
    formState: { errors: errorsDespesa },
  } = useForm({
    resolver: zodResolver(despesaSchema),
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
        toast.error("Erro ao buscar dados");
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
  const handleAdicionarReceita = async (data) => {
    try {
      console.log("Dados recebidos para adicionar receita:", data); // Adicionando console log para verificar dados recebidos
      const response = await adicionarReceita(data);
      console.log("Dados retornados da receita", response);
      toast.success("Receita adicionada com sucesso!");
      fecharFormulario();
      await atualizarDados();
    } catch (error) {
      console.error("Erro ao adicionar receita:", error);
      toast.error("Erro ao adicionar receita");
    }
  };

  // Função para adicionar uma nova despesa
  const handleAdicionarDespesa = async (data) => {
    try {
      console.log("Dados recebidos para adicionar despesa:", data); // Adicionando console log para verificar dados recebidos
      const response = await adicionarDespesa(data);
      console.log("Dados retornados da despesa", response);
      toast.success("Despesa adicionada com sucesso!");
      fecharFormulario();
      await atualizarDados();
    } catch (error) {
      console.error("Erro ao adicionar despesa:", error);
      toast.error("Erro ao adicionar despesa");
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
      toast.error("Erro ao atualizar dados");
    }
  };

  return (
    <div className="bg-cinzaClaro2 absolute w-9/12 h-6/12 mt-96 shadow-2xl shadow-black flex justify-center rounded-3xl">
      <ToastContainer />
      <div className="bg-cinzaClaro2 w-full rounded-3xl">
        <div className="bg-cinzaClaro2 shadow-md rounded-3xl p-8">
          {carregando ? (
            <div className="flex flex-col items-center justify-center">
              <div
                className="loader border-r-2 rounded-full border-yellow-500 bg-yellow-300 animate-bounce
                aspect-square w-20 flex justify-center items-center text-yellow-700 text-6xl"
              >
                $
              </div>
              <p className="text-6xl text-yellow-700">Carregando</p>
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
                <div className="flex space-x-2">
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
                    Avançar
                  </button>
                </div>
                <div className="flex space-x-2">
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
              </div>
            </>
          )}
        </div>
      </div>

      {/* Formulário de Nova Receita */}
      {mostrarFormReceita && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-6xl mb-4">Adicionar Receita</h2>
            <form onSubmit={handleAdicionarReceitaForm(handleAdicionarReceita)}>
              <Input
                label="Descrição"
                type="text"
                name="descricao"
                placeholder="Digite a descrição"
                register={registerReceita}
                error={errorsReceita.descricao?.message}
              />
              <Input
                label="Categoria"
                type="text"
                name="categoria"
                placeholder="Digite a categoria"
                register={registerReceita}
                error={errorsReceita.categoria?.message}
              />
              <Input
                label="Valor"
                type="number"
                name="valor"
                placeholder="Digite o valor"
                register={registerReceita}
                error={errorsReceita.valor?.message}
              />
              <Input
                label="Data"
                type="date"
                name="data"
                register={registerReceita}
                placeholder={"Adicione a data da receita"}
                error={errorsReceita.data?.message}
              />
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  onClick={fecharFormulario}
                  className="bg-gray-500 text-white p-5 text-5xl rounded-lg hover:bg-gray-600 mr-2"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white p-5 text-5xl rounded-lg hover:bg-green-600"
                >
                  Adicionar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Formulário de Nova Despesa */}
      {mostrarFormDespesa && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-6xl mb-4">Adicionar Despesa</h2>
            <form onSubmit={handleAdicionarDespesaForm(handleAdicionarDespesa)}>
              <Input
                label="Descrição"
                type="text"
                name="descricao"
                placeholder="Digite a descrição"
                register={registerDespesa}
                error={errorsDespesa.descricao?.message}
              />
              <Input
                label="Categoria"
                type="text"
                name="categoria"
                placeholder="Digite a categoria"
                register={registerDespesa}
                error={errorsDespesa.categoria?.message}
              />
              <Input
                label="Valor"
                type="number"
                name="valor"
                placeholder="Digite o valor"
                register={registerDespesa}
                error={errorsDespesa.valor?.message}
              />
              <Input
                label="Data"
                type="date"
                name="data"
                placeholder={"Adicione a data da despesa"}
                register={registerDespesa}
                error={errorsDespesa.data?.message}
              />
              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  onClick={fecharFormulario}
                  className="bg-gray-500 text-white p-5 text-5xl rounded-lg hover:bg-gray-600 mr-2"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="bg-red-500 text-white p-5 text-5xl rounded-lg hover:bg-red-600"
                >
                  Adicionar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
