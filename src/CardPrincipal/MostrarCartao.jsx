import { useEffect, useState, useRef } from "react";
import { pesCartao, deletarCartao } from "../services/cartaoServico";
import Cookies from "js-cookie";
import { Transition } from "react-transition-group";
import intermediumImage from "../Image/intermedium.png"; // Importe a imagem do Banco Inter
import "./css/transicoes.css"; // Importe seu arquivo CSS com as classes de transição

const MostrarCartao = () => {
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

  // No arquivo frontend onde você consome as rotas


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

  // Função para renderizar o cartão em formato de formulário estilizado
  const renderizarFormularioCartao = (cartao, index) => {
    // Determina qual imagem utilizar com base no nome da conta
    let imagemCartao;
    if (cartao.conta === "Banco Inter") {
      imagemCartao = intermediumImage; // Imagem do Banco Inter
    } else {
      // Caso queira adicionar outras lógicas para outros tipos de conta
      imagemCartao = cartao.imagemPadrao; // Use a imagem padrão do cartão
    }

    return (
      <div
        key={index}
        className="flex flex-col justify-between bg-gray-800 p-4 border border-white border-opacity-30 rounded-lg shadow-md max-w-xs mx-auto"
      >
        <div className="flex flex-row items-center justify-between mb-3">
          <input
            className="w-full h-10 border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2 mb-3"
            type="text"
            name="cardName"
            id="cardName"
            value={cartao.nome}
            readOnly
          />
          <div className="flex items-center justify-center relative w-14 h-9 bg-gray-800 border border-white border-opacity-20 rounded-md">
            <img
              src={imagemCartao}
              alt={cartao.nome}
              className="w-8 h-8 object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-3">
          <input
            className="w-full h-10 border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2"
            type="text"
            name="cardNumber"
            id="cardNumber"
            value={cartao.descricao}
            readOnly
          />
          <div className="flex flex-row justify-between">
            <input
              className="w-1/2 h-10 border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2"
              type="text"
              name="expiryDate"
              id="expiryDate"
              value={`Vencimento: ${cartao.vencimento}`}
              readOnly
            />
            <input
              className="w-1/2 h-10 border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2"
              type="text"
              name="closingDate"
              id="closingDate"
              value={`Fechamento: ${cartao.fechamento}`}
              readOnly
            />
          </div>
          <div className="flex justify-between">
            <input
              className="w-2/3 h-10 border-none outline-none text-sm bg-gray-800 text-white font-semibold caret-orange-500 pl-2"
              type="text"
              name="cvv"
              id="cvv"
              value={`Limite: R$${cartao.limite}`}
              readOnly
            />
            <button
              onClick={() => confirmarDelecao(cartao.id)}
              className="w-1/3 h-10 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none"
            >
              Deletar
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col mb-20">
      <h1 className="text-7xl text-white text-center mb-16">Seus Cartões</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6">
        {cartoesExibidos.map((cartao, index) => (
          <Transition
            key={index}
            nodeRef={nodeRefs.current[index]} // Passa a ref para o Transition
            timeout={500}
            classNames="transicao" // Nome da classe CSS para as transições
          >
            {(state) => (
              <div
                ref={(el) => (nodeRefs.current[index] = el)} // Armazena a ref para cada elemento
                className={`transicao-${state} mb-10 md:mb-0 md:mr-10`}
              >
                {renderizarFormularioCartao(cartao, index)}{" "}
                {/* Renderiza o formulário estilizado do cartão com os dados do cartão atual */}
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
              ? "bg-gray-400 cursor-not-allowed text-6xl"
              : "bg-blue-500 text-white text-6xl"
          }`}
        >
          Anterior
        </button>
        <button
          onClick={proximaPagina}
          disabled={indiceUltimoCartao >= cartoes.length}
          className={`text-4xl px-5 py-2 rounded-xl ${
            indiceUltimoCartao >= cartoes.length
              ? "bg-gray-400 cursor-not-allowed text-6xl"
              : "bg-blue-500 text-white text-6xl"
          }`}
        >
          Próxima
        </button>
      </div>

      {/* Modal de confirmação para deletar cartão */}
      {cartaoParaDeletar && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-2xl">
            <h2 className="text-5xl mb-4">
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
};

export default MostrarCartao;
