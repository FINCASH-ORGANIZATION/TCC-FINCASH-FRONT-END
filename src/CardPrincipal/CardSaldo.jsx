import '../CardPrincipal/CardSaldoStyled.css'

export default function CardSaldo() {
  return (
    <div className="w-9/12 h-6/12 absolute mt-40 flex justify-center">
      <div className="bg-cinzaClaro2 w-full h-6/12 p-20 shadow-2xl shadow-black flex justify-between rounded-3xl">
        <div className='left w-full h-full flex flex-col justify-between'>
          <div className='flex flex-col'>
            <span className='text-7xl text-cinzaClaro1'>Thomaz Feitosa de Mello</span>
            <span className='text-7xl text-cinzaClaro5 mt-20'>Saldo atual</span>
            <span className='text-8xl text-white'>R$ 0,00</span>
            <span className='text-7xl text-cinzaClaro5 mt-10'>Saldo previsto</span>
            <span className='text-8xl text-white'>R$ 0,00</span>
          </div><br /><br />
          <div className='flex items-end mt-28'>
            <button className='bg-azulclaro text-7xl text-white rounded-xl p-6'>Editar</button>
          </div>
        </div>
        <div className='right w-full flex justify-end'>
          <img src="../src/Image/saldo.png" alt="" className='w-44 h-44'/>
        </div>
      </div>
    </div>
  );
}
