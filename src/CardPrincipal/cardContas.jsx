import "./css/cardContas.css";

export default function CardContas() {
  return (
    <div className="flex flex-col items-center w-full">
      <span className="text-8xl text-white">Adicionar Conta</span>
      <div
        className="cardPrincipalBanks bg-white w-4/12 mt-5 px-20 pb-10 rounded-3xl shadow-2xl shadow-black flex flex-col items-center overflow-y-hidden"
        style={{ maxHeight: "1150px" }}
      >
        <h1 className="text-7xl text-center mt-10 text-cinzaClaro2">
          Escolha um banco
        </h1>
        <input
          type="text"
          className="text-6xl mt-5 mb-10 text-center rounded-none border-b-4 border-cinzaClaro2"
          placeholder="Pesquise por um banco"
        />

        <div className="scrollbar-banks w-full">
          <button className="flex justify-between items-center w-full p-5 mt-10 rounded-xl hover:bg-cinzaClaro6">
            <img
              src="../src/Image/bb.png"
              alt=""
              className="rounded-full w-32"
            />
            <span className="text-6xl">Banco do Brasil</span>
            <img src="../src/Image/seta1.png" alt="" className="w-10" />
          </button>

          <button className="flex justify-between items-center w-full p-5 rounded-xl hover:bg-cinzaClaro6">
            <img
              src="../src/Image/caixa.png"
              alt=""
              className="rounded-full w-32"
            />
            <span className="text-6xl">Caixa</span>
            <img src="../src/Image/seta1.png" alt="" className="w-10" />
          </button>

          <button className="flex justify-between items-center w-full p-5 rounded-xl hover:bg-cinzaClaro6">
            <img
              src="../src/Image/itau.png"
              alt=""
              className="rounded-full w-32"
            />
            <span className="text-6xl">Itau</span>
            <img src="../src/Image/seta1.png" alt="" className="w-10" />
          </button>

          <button className="flex justify-between items-center w-full p-5 rounded-xl hover:bg-cinzaClaro6">
            <img
              src="../src/Image/santander.png"
              alt=""
              className="rounded-full w-32"
            />
            <span className="text-6xl">Santander</span>
            <img src="../src/Image/seta1.png" alt="" className="w-10" />
          </button>

          <button className="flex justify-between items-center w-full p-5 rounded-xl hover:bg-cinzaClaro6">
            <img
              src="../src/Image/nubank.png"
              alt=""
              className="rounded-full w-32"
            />
            <span className="text-6xl">Nubank</span>
            <img src="../src/Image/seta1.png" alt="" className="w-10" />
          </button>

          <button className="flex justify-between items-center w-full p-5 rounded-xl hover:bg-cinzaClaro6">
            <img
              src="../src/Image/bradesco.png"
              alt=""
              className="rounded-full w-32"
            />
            <span className="text-6xl">Bradesco</span>
            <img src="../src/Image/seta1.png" alt="" className="w-10" />
          </button>

          <button className="flex justify-between items-center w-full p-5 rounded-xl hover:bg-cinzaClaro6">
            <img
              src="../src/Image/intermedium.png"
              alt=""
              className="rounded-full w-32"
            />
            <span className="text-6xl">Inter</span>
            <img src="../src/Image/seta1.png" alt="" className="w-10" />
          </button>
        </div>
      </div>
    </div>
  );
}
