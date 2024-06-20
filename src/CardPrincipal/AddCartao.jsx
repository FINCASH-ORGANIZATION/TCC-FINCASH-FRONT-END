import { Input } from "../input/input.jsx";
import "../CardPrincipal/AddCartao.css"

export default function AddCartao() {
  return (
    <div className="flex flex-col justify-center items-center">
      <span className="text-9xl text-white">Cartões de Crédito</span>
      <div className="card bg-white w-full px-20 py-5 mt-5 shadow-2xl rounded-3xl shadow-black flex flex-col">
        <span className="text-7xl mt-10">Novo cartão</span>
        <input type="" className="inputPrincipal" placeholder="R$0,00"/><br />
        <input className="input" type="text" placeholder="Descrição"></input>
          <input className="input" type="number" placeholder="Limite do cartão"></input>
          <input className="input" type="" placeholder="Conta"></input>
          <input className="input" type="text" placeholder="Data de fechamento"></input>
          <input className="input" type="text" placeholder="Data da vencimento"></input>
        <br />
        <div className="flex justify-between mt-20">
            <button className="bg-cinzaClaro6 p-5 px-20 rounded-full text-7xl text-white">Salvar</button>
            <button className="bg-cinzaClaro6 p-5 px-20 rounded-full text-7xl text-white">Voltar</button>
        </div>
      </div>
    </div>
  );
}