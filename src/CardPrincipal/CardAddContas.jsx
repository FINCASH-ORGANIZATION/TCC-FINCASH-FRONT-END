import { Input } from "../input/input";

export default function CardAddContas() {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-9xl text-white ">Adicionar conta</span>
      <div className="card bg-white w-full p-20 shadow-2xl rounded-3xl shadow-black flex flex-col">
        <span className="text-7xl mt-10 text-center">Nova conta</span>
        <button className="flex justify-between items-center w-full p-5 mt-10 mb-20 rounded-xl hover:bg-cinzaClaro6">
          <img src="../src/Image/bb.png" alt="" className="rounded-full w-32" />
          <span className="text-6xl">Banco do Brasil</span>
          <img src="../src/Image/seta1.png" alt="" className="w-10" />
        </button>
        <Input
          type="string"
          name="conta"
          className="text-8xl placeholder:text-teal-600 border-b-4 border-gray-500 rounded-none"
          placeholder="R$0,00"
          register={register}
        />
        <br />
        <input className="input" type="text" placeholder="Descrição"></input>
        <br />
        <div className="flex justify-between mt-20">
          <button className="bg-cinzaClaro6 p-5 px-20 rounded-full text-7xl text-white">
            Salvar
          </button>
          <button className="bg-cinzaClaro6 p-5 px-20 rounded-full text-7xl text-white">
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}
