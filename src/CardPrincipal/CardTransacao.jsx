import '../CardPrincipal/CardTransacao.css'

export function CardTransacao() {
    return (
        <div className="w-10/12 h-1/2 absolute rounded-3xl flex justify-center">
            <div className="bg-cinzaClaro2 w-11/12 h-1/12 rounded-3xl p-4 shadow-2xl shadow-black">
                {/*<div className='flex justify-between '>
                    <span className='text-6xl text-cinzaClaro5'>Transações</span>
                    <img src="../src/Image/transacao.png" alt="" className='w-24 h-24'/>
                </div>
                <span className='text-5xl text-white'>R$ 0,00</span>*/}
                <div className="Top">
                    <div className='flex justify-between '>
                        <span className='text-5xl text-cinzaClaro5'>Transações</span>
                        <img src="../src/Image/transacao.png" alt="" className='w-20 h-20'/>
                    </div>
                    <span className='text-5xl text-white'>R$ 0,00</span>
                </div>
                <div className="Bottom flex items-end justify-center w-full h-4/6 mt-10">
                <div className=" grid grid-cols-4 gap-2 mt-10 w-full">
                    <div className="bg-cinzaClaro3 rounded-3xl p-4 shadow-2xl shadow-black">
                        <h1 className="text-white text-4xl">Saldo</h1>
                        <span className="input text-white text-5xl">R$ 0,00</span>
                    </div>

                    <div className="bg-cinzaClaro3 rounded-3xl p-4 shadow-2xl shadow-black">
                        <h1 className="text-white text-4xl">Receita</h1>
                        <span className="input text-white text-5xl">R$ 0,00</span>
                    </div>

                    <div className="bg-cinzaClaro3 rounded-3xl p-4 shadow-2xl shadow-black">
                        <h1 className="text-white text-4xl">Despesas</h1>
                        <span className="input text-white text-5xl">R$ 0,00</span>
                    </div>

                    <div className="bg-cinzaClaro3 rounded-3xl p-4 shadow-2xl shadow-black">
                        <h1 className="text-white text-4xl">Balanço</h1>
                        <span className="input text-white text-5xl">R$ 0,00</span>
                    </div>
                </div>
              </div>
              </div>
        </div>
    )
}