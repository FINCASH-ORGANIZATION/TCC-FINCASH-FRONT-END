export default function CardCartao() {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-8xl text-white">Cartões de Crédito</span>
      <div className="bg-white p-72 mt-5 rounded-3xl shadow-2xl shadow-black ">
        <buttom className="flex flex-col justify-center items-center">
          <img src="../src/Image/mais.png" alt="" className="w-44" />
          <span className="text-8xl text-black">Adicionar</span>
        </buttom>
      </div>
    </div>
  );
}
