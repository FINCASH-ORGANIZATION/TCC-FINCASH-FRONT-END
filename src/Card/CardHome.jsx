import "../Card/CardHomeStyled.css";

export function CardHome() {
  return (
    <>
      <div className="bg-cinzaEscuro w-screen h-screen font-mono flex justify-center mt-32 ">
        <div className="bg-cinzaClaro2 flex justify-between w-2/12 h-1/6 m-8 p-3 rounded-3xl shadow-2xl shadow-black">
          <div className="flex flex-col justify-between">
            <h1 className="text-white text-4xl">Saldo</h1>
            <span className="text-white text-5xl">R$ 0,00</span>
          </div>
          <img src="../src/Image/saldo.png" alt="" className="w-16 h-16" />
        </div>
        <div className="bg-cinzaClaro2 flex justify-between w-2/12 h-1/6 m-8 p-3 rounded-3xl shadow-2xl shadow-black">
          <div className="flex flex-col justify-between">
            <h1 className="text-white text-4xl">Receita</h1>
            <span className="text-white text-5xl">R$ 0,00</span>
          </div>
          <img src="../src/Image/receita.png" alt="" className="w-16 h-16" />
        </div>
        <div className="bg-cinzaClaro2 flex justify-between w-2/12 h-1/6 m-8 p-3 rounded-3xl shadow-2xl shadow-black">
          <div className="flex flex-col justify-between">
            <h1 className="text-white text-4xl">Despesa</h1>
            <span className="text-white text-5xl">R$ 0,00</span>
          </div>
          <img src="../src/Image/despesa.png" alt="" className="w-16 h-16" />
        </div>
        <div className="bg-cinzaClaro2 flex justify-between w-2/12 h-1/6 m-8 p-3 rounded-3xl shadow-2xl shadow-black">
          <div className="flex flex-col justify-between">
            <h1 className="text-white text-4xl">Cartões</h1>
            <span className="text-white text-5xl">R$ 0,00</span>
          </div>
          <img src="../src/Image/cartoes.png" alt="" className="w-16 h-16" />
        </div>
      </div>
    </>
  );
}
