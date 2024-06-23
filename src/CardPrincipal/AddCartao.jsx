import { Input } from "../input/input.jsx";
import "../CardPrincipal/AddCartao.css";

export default function AddCartao() {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-9xl text-white">Cartões de Crédito</span>
      <div className="card bg-white w-full px-20 py-5 mt-5 shadow-2xl rounded-3xl shadow-black flex flex-col items-center">
        <span className="text-7xl mt-10">Novo cartão</span>
        <input type="" className="inputPrincipal" placeholder="R$0,00" />
        <br />
        <input className="input" type="text" placeholder="Descrição"></input>
        <input
          className="input"
          type="number"
          placeholder="Limite do cartão"
        ></input>
        <input
          className="input"
          type="text"
          placeholder="Data de fechamento"
        ></input>
        <input
          className="input"
          type="text"
          placeholder="Data da vencimento"
        ></input>
        <br />
        <span className="text-6xl text-cinzaClaro2 font-semibold">
          Escolha uma conta para o cartão
        </span>
        <button className="bg-neutral-400 flex justify-between items-center w-full p-5 mt-10 rounded-3xl hover:bg-cinzaClaro6">
          <img src="../src/Image/bb.png" alt="" className="rounded-full w-32" />
          <span className="text-6xl">Banco do Brasil</span>
          <img src="../src/Image/seta1.png" alt="" className="w-10" />
        </button>
      </div>
    </div>
  );
}
