import '../CardPrincipal/CardCartaoStyled.css'

export default function CardCartao() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <span className="text-5xl text-white">Cartões de Crédito</span>
            <div className="bg-white p-4 w-full p-20 mt-5 rounded-3xl shadow-2xl shadow-black flex flex-col justify-center items-center">
                <img src="../src/Image/mais.png" alt="" className="absolute w-20 mb-10" />
                <span className="text-4xl mt-24">Novo cartão de crédito</span>  
            </div>
        </div>
    )
}