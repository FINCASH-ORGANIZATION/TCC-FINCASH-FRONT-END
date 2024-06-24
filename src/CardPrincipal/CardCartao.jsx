export default function CardCartao({ onClick }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-8xl text-white">Cartões de Crédito</span>
      <div className="bg-white p-72 mt-5 rounded-3xl shadow-2xl shadow-black ">
        <button
          className="flex flex-col justify-center items-center"
          onClick={onClick} // Chama a função passada como prop onClick
        >
          <img src="../src/Image/mais.png" alt="" className="w-44" />
          <span className="text-8xl text-black">Adicionar</span>
        </button>
      </div>
    </div>
  );
}
