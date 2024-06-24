export default function CardCartao({ onClick }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-6xl lg:text-8xl text-white text-center mb-8">
        Cartões de Crédito
      </h1>
      <div className="bg-white p-6 md:p-12 lg:p-20 rounded-3xl shadow-2xl">
        <button
          className="flex flex-col justify-center items-center"
          onClick={onClick}
        >
          <img
            src="../src/Image/mais.png"
            alt=""
            className="w-24 md:w-36 lg:w-44"
          />
          <span className="text-4xl md:text-6xl lg:text-8xl text-black mt-4">
            Adicionar
          </span>
        </button>
      </div>
    </div>
  );
}
