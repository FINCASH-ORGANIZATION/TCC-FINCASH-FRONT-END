import '../CardPrincipal/CardTransacao.css'


export function CardTransacao() {
    return (
        <div className="w-10/12 h-1/2 absolute rounded-3xl flex justify-center">
            <div className="bg-cinzaClaro2 w-11/12 h-1/12 rounded-3xl p-10 shadow-2xl shadow-black">
                <div className="Top">
                    <div className='flex justify-between '>
                        <span className='text-8xl text-cinzaClaro5'>Transações</span>
                        <img src="../src/Image/transacao.png" alt="" className='w-40 h-40'/>
                    </div>
                    <span className='text-8xl text-white'>R$ 0,00</span>
                </div>
                <div className="Bottom flex items-end justify-center w-full h-4/6 mt-20">
                <div className=" grid grid-cols-4 gap-10 mt-10 w-full">
                    <div className="bg-cinzaClaro3 rounded-3xl p-4 shadow-2xl shadow-black">
                        <h1 className="text-white text-7xl">Saldo</h1>
                        <span className="text-white text-8xl mt-10">R$ 0,00</span>
                    </div>

                    <div className="bg-cinzaClaro3 rounded-3xl p-4 shadow-2xl shadow-black">
                        <h1 className="text-white text-7xl">Receita</h1>
                        <span className="text-white text-8xl mt-10">R$ 0,00</span>
                    </div>

                    <div className="bg-cinzaClaro3 rounded-3xl p-4 shadow-2xl shadow-black">
                        <h1 className="text-white text-7xl">Despesas</h1>
                        <span className="text-white text-8xl mt-10">R$ 0,00</span>
                    </div>

                    <div className="bg-cinzaClaro3 rounded-3xl p-4 shadow-2xl shadow-black">
                        <h1 className="text-white text-7xl">Balanço</h1>
                        <span className="text-white text-8xl mt-10">R$ 0,00</span>
                    </div>
                </div>
              </div>
              </div>
        </div>
    )
}