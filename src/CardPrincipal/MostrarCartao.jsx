import { useEffect, useState, useRef } from "react";
import { pesCartao, deletarCartao } from "../services/cartaoServico";
import Cookies from "js-cookie";
import { Transition } from "react-transition-group";
import "./transicoes.css"; // Importe seu arquivo CSS com as classes de transição

export default function MostrarCartao() {
  const [cartoes, setCartoes] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [cartaoParaDeletar, setCartaoParaDeletar] = useState(null);
  const cartoesPorPagina = 6;
  const nodeRefs = useRef([]); // Ref para os elementos

  useEffect(() => {
    if (Cookies.get("token")) {
      buscarCartoes();
    }
  }, []);

  async function buscarCartoes() {
    try {
      const response = await pesCartao();
      if (response && Array.isArray(response.results)) {
        setCartoes(response.results);
      } else {
        setCartoes([]);
        console.error("Resposta inesperada ao buscar cartões:", response);
      }
    } catch (error) {
      console.error("Erro ao buscar cartões:", error);
      setCartoes([]);
    }
  }

  const indiceUltimoCartao = paginaAtual * cartoesPorPagina;
  const indicePrimeiroCartao = indiceUltimoCartao - cartoesPorPagina;
  const cartoesExibidos = cartoes.slice(
    indicePrimeiroCartao,
    indiceUltimoCartao
  );

  const proximaPagina = () => {
    if (indiceUltimoCartao < cartoes.length) {
      setPaginaAtual(paginaAtual + 1);
    }
  };

  const paginaAnterior = () => {
    if (paginaAtual > 1) {
      setPaginaAtual(paginaAtual - 1);
    }
  };

  const confirmarDelecao = (cartaoId) => {
    setCartaoParaDeletar(cartaoId);
  };

  const cancelarDelecao = () => {
    setCartaoParaDeletar(null);
  };

  async function handleDeletarCartao() {
    try {
      const response = await deletarCartao(cartaoParaDeletar);
      console.log(response);
      console.log("Deletando cartão com ID:", cartaoParaDeletar);
      setCartaoParaDeletar(null);
      buscarCartoes();
    } catch (error) {
      console.error("Erro ao deletar cartão:", error);
    }
  }

  return (
    <div className="flex flex-col mb-20">
      <h1 className="text-7xl text-white text-center mb-16">Seus Cartões</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
        {cartoesExibidos.map((cartao, index) => (
          <Transition
            key={index}
            nodeRef={nodeRefs.current[index]} // Passa a ref para o Transition
            timeout={500}
          >
            {(state) => (
              <div
                ref={(el) => (nodeRefs.current[index] = el)} // Armazena a ref para cada elemento
                className={`transicao-${state}`}
                style={{ marginBottom: "20px" }} // Espaçamento entre os cartões
              >
                <div className="bg-white w-96 p-5 shadow-2xl rounded-lg relative overflow-hidden">
                  <img
                    src={cartao.imagem}
                    alt={cartao.nome}
                    className="absolute top-0 right-0 h-16 w-16 object-contain p-2"
                  />
                  <div className="flex flex-col items-center">
                    <span className="text-3xl mb-4">{cartao.nome}</span>
                    <div className="flex justify-between w-full mb-4">
                      <span className="text-lg">Valor: R${cartao.valor}</span>
                      <button
                        onClick={() => confirmarDelecao(cartao.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
                      >
                        Deletar
                      </button>
                    </div>
                    <div className="flex flex-wrap justify-between w-full mb-4">
                      <span className="text-lg">Limite: R${cartao.limite}</span>
                      <span className="text-lg">
                        Vencimento: {cartao.vencimento}
                      </span>
                      <span className="text-lg">
                        Fechamento: {cartao.fechamento}
                      </span>
                      <span className="text-lg">
                        Descrição: {cartao.descricao}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Transition>
        ))}
      </div>
      <div className="flex justify-center mt-10 space-x-5">
        <button
          onClick={paginaAnterior}
          disabled={paginaAtual === 1}
          className={`text-4xl px-5 py-2 rounded-xl ${
            paginaAtual === 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white"
          }`}
        >
          Anterior
        </button>
        <button
          onClick={proximaPagina}
          disabled={indiceUltimoCartao >= cartoes.length}
          className={`text-4xl px-5 py-2 rounded-xl ${
            indiceUltimoCartao >= cartoes.length
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 text-white"
          }`}
        >
          Próxima
        </button>
      </div>

      {/* Modal de confirmação para deletar cartão */}
      {cartaoParaDeletar && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-2xl">
            <h2 className="text-3xl mb-4">
              Tem certeza que deseja deletar este cartão?
            </h2>
            <div className="flex space-x-4">
              <button
                onClick={handleDeletarCartao}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none"
              >
                Deletar
              </button>
              <button
                onClick={cancelarDelecao}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
