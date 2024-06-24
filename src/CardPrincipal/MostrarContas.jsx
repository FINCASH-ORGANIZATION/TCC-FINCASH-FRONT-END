import { useState, useEffect } from "react";
import {
  pesConta,
  apagarConta as apagarContaServico,
} from "../services/contaServico"; // Renomeie a função de serviço para evitar conflito de nomes

export default function MostrarContas() {
  const [contas, setContas] = useState([]); // Inicializa contas como um array vazio
  const [carregando, setCarregando] = useState(true); // Estado para controlar o carregamento

  // Efeito para carregar as contas ao montar o componente
  useEffect(() => {
    const fetchContas = async () => {
      try {
        const contasData = await pesConta();
        setContas(contasData.results); // Atualiza contas com os dados recebidos de pesConta
        console.log(contasData.results);
        setCarregando(false); // Define carregando como false após carregar as contas
      } catch (error) {
        console.error("Erro ao buscar contas:", error);
        setCarregando(false); // Em caso de erro, também define carregando como false
      }
    };

    fetchContas();
  }, []); // Array vazio para garantir que o efeito seja executado apenas uma vez

  // Função para deletar uma conta
  async function handleApagarConta(contaId) {
    try {
      const response = await apagarContaServico(contaId); // Chama a função de serviço para deletar a conta
      console.log(response);
      // Atualiza a lista de contas após deletar
      const updatedContas = contas.filter((conta) => conta.id !== contaId);
      setContas(updatedContas);
      console.log("Conta deletada com sucesso.");
    } catch (error) {
      console.error("Erro ao deletar conta:", error);
    }
  }

  // Verificação de carregamento antes de renderizar as contas
  if (carregando) {
    return <p>Carregando...</p>; // Exibe uma mensagem de carregamento enquanto as contas são buscadas
  }

  // Verifica se contas é um array antes de renderizar
  if (!Array.isArray(contas)) {
    console.error("Os dados retornados não são um array:", contas);
    return <p>Ocorreu um erro ao buscar as contas.</p>;
  }

  // Verifica se não há contas cadastradas
  if (contas.length === 0) {
    return (
      <div className="flex flex-col items-center mt-10">
        <p className="text-3xl text-white mb-5">
          Você ainda não cadastrou suas contas.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col mb-20">
      <h1 className="text-7xl text-white text-center mb-16">Suas Contas</h1>
      <div className="grid grid-cols-3 gap-y-10">
        {contas.map((conta, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <div className="card bg-white w-10/12 p-5 shadow-2xl rounded-3xl shadow-black flex flex-col">
              <div className="flex justify-between items-center">
                <span className="text-5xl">{conta.banco}</span>
                <button
                  onClick={() => handleApagarConta(conta.id)} // Chama handleApagarConta com o ID da conta ao clicar no botão
                  className="bg-red-500 px-10 text-5xl text-white py-5 rounded-2xl"
                >
                  Deletar
                </button>
              </div>
              <img src={conta.imagem} className="w-28 h-28" alt={conta.banco} />
              <input
                type="text"
                className="InputPrincipal placeholder:text-7xl"
                placeholder="R$0,00"
                value={""} // Valor do input, vazio pois é apenas exibição
                readOnly // Input apenas de leitura
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
