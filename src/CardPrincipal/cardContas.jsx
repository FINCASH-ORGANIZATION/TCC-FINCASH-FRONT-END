export default function CardContas() {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-8xl text-white">Adicionar Conta</span>
      <div className="bg-white mt-5 px-20 rounded-3xl shadow-2xl shadow-black ">
        <h1 className="text-7xl text-center mt-10">Escolha um banco</h1>
        <input type="text" className="text-6xl mt-5" placeholder="Pesquise por um banco" />
        <buttom className="flex justify-between items-center p-5 mt-10 hover:bg-cinzaClaro6 ">
            <img src="../src/Image/bb.png" alt="" className="rounded-full w-32" />
            <span className="text-6xl">Banco do Brasil</span>
        </buttom>

        <buttom className="flex justify-between items-center p-5 hover:bg-cinzaClaro6">
            <img src="../src/Image/caixa.png" alt="" className="rounded-full w-32" />
            <span className="text-6xl">Caixa</span>
        </buttom>

        <buttom className="flex justify-between items-center p-5 hover:bg-cinzaClaro6">
            <img src="../src/Image/itau.png" alt="" className="rounded-full w-32" />
            <span className="text-6xl">Itau</span>
        </buttom>

        <buttom className="flex justify-between items-center p-5 hover:bg-cinzaClaro6">
            <img src="../src/Image/santander.png" alt="" className="rounded-full w-32" />
            <span className="text-6xl">Santander</span>
        </buttom>

        <buttom className="flex justify-between items-center p-5 mb-10 hover:bg-cinzaClaro6">
            <img src="../src/Image/nubank.png" alt="" className="rounded-full w-32" />
            <span className="text-6xl">Nubank</span>
        </buttom>
      </div>
    </div>
  );
}