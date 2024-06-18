export default function AddCartao() {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-5xl text-white">Cartões de Crédito</span>
      <div className="bg-white p-4 w-full p-20 mt-5 rounded-3xl shadow-2xl shadow-black flex flex-col">
        <span className="text-2xl">Cartão de crédito</span>
        <span className="text-4xl text-teal-700">R$0,00</span><br />
        <div className="flex justify-between">
            <span className="text-lg">Feito em: </span>
            <span className="text-lg">Data de adicionamento do cartão</span>
        </div>
        <div className="flex justify-between">
            <span className="text-lg">Limite: </span>
            <span className="text-lg text-red-600">Número limite</span>
        </div><br />
        <div className="flex justify-between">
            <button className="bg-azulclaro p-2 rounded-lg">Editar</button>
            <button className="bg-red-500 p-2 rounded-lg">Excluir</button>
        </div>
      </div>
    </div>
  );
}
