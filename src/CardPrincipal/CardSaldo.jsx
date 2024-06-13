export default function CardSaldo() {
  return (
    <div className="w-10/12 h-1/2 absolute mt-40 rounded-3xl flex justify-center">
      
      
      <div className="bg-cinzaClaro2 flex justify-around w-6/12 h-1/12 rounded-3xl mr-4 p-4 shadow-2xl shadow-black">
        <div className="w-full flex flex-col">
          <span className="text-5xl text-cinzaClaro5" >Receitas</span>
          <span className="text-4xl text-white mt-6" >R$ 0,00</span>
          <button className="bg-cinzaEscuro p-2 rounded-full shadow-lg shadow-cinzaClaro text-3xl text-cinzaClaro5 font-bold mt-6 w-5/12 hover:text-cinzaEscuro hover:bg-cinzaClaro5">Julho</button>
        </div>



        <div className="w-full flex flex-col items-end justify-between">
          <img src="../src/Image/receita.png" alt="" className="w-3/12 h-1/12" />
          <div className="bg-cinzaClaro2 flex flex-col justify-between w-9/12 h-28 shadow-lg shadow-black rounded-3xl p-4"> 
            <span className="text-xl text-cinzaClaro6">Receitas Pendentes</span>
            <span className="text-4xl text-white">R$ 0,00</span>
          </div>

          <div className="bg-cinzaClaro2 flex flex-col justify-between w-9/12 h-28 shadow-lg shadow-black rounded-3xl p-4"> 
            <span className="text-xl text-cinzaClaro6">Receitas Recebidas</span>
            <span className="text-4xl text-white">R$ 0,00</span>
          </div>

          <div className="bg-cinzaClaro2 flex flex-col justify-between w-9/12 h-28 shadow-lg shadow-black rounded-3xl p-4"> 
            <span className="text-xl text-cinzaClaro6">Total</span>
            <span className="text-4xl text-white">R$ 0,00</span>
          </div>
        </div>
      </div>



    
      <div className="bg-cinzaClaro2 flex justify-around w-6/12 h-1/12 rounded-3xl ml-4 p-4 shadow-2xl shadow-black">
        <div className="w-full flex flex-col">
          <span className="text-5xl text-cinzaClaro5" >Despesas</span>
          <span className="text-4xl text-white mt-6" >R$ 0,00</span>
          <button className="bg-cinzaEscuro p-2 rounded-full shadow-lg shadow-cinzaClaro text-3xl text-cinzaClaro5 font-bold mt-6 w-5/12 hover:text-cinzaEscuro hover:bg-cinzaClaro5">Julho</button>
        </div>



        <div className="w-full flex flex-col items-end justify-between">
          <img src="../src/Image/despesa.png" alt="" className="w-3/12 h-1/12" />
          <div className="bg-cinzaClaro2 flex flex-col justify-between w-9/12 h-28 shadow-lg shadow-black rounded-3xl p-4"> 
            <span className="text-xl text-cinzaClaro6">Despesas Pendentes</span>
            <span className="text-4xl text-white">R$ 0,00</span>
          </div>

          <div className="bg-cinzaClaro2 flex flex-col justify-between w-9/12 h-28 shadow-lg shadow-black rounded-3xl p-4"> 
            <span className="text-xl text-cinzaClaro6">Despesas Pagas</span>
            <span className="text-4xl text-white">R$ 0,00</span>
          </div>

          <div className="bg-cinzaClaro2 flex flex-col justify-between w-9/12 h-28 shadow-lg shadow-black rounded-3xl p-4"> 
            <span className="text-xl text-cinzaClaro6">Total</span>
            <span className="text-4xl text-white">R$ 0,00</span>
          </div>
        </div>
      </div>

    </div>
  );    
}
