import '../CardPrincipal/CardSaldoStyled.css'

export default function CardSaldo() {
  return (
    <div className="w-10/12 h-1/12 absolute mt-40 rounded-3xl flex justify-center">
      <div className="card bg-cinzaClaro2 w-11/12 h-1/12 rounded-3xl p-4 shadow-2xl shadow-black flex justify-between">
        <div className='left w-full flex flex-col justify-between'>
          <div className='flex flex-col'>
            <span className='text-2xl text-cinzaClaro1'>Nome do usúario</span><br />
            <span className='text-3xl text-cinzaClaro5'>Saldo</span>
            <span className='text-4xl text-white'>R$ 0,00</span>
            <span className='text-3xl text-cinzaClaro5'>Saldo</span>
            <span className='text-4xl text-white'>R$ 0,00</span>
          </div><br /><br />
          <div className='flex items-end'>
            <button className='bg-azulclaro text-xl rounded-lg p-2'>Editar</button>
          </div>
        </div>
        <div className='right w-full flex justify-end'>
          <img src="../src/Image/saldo.png" alt="" className='w-20 h-20'/>
        </div>
      </div>
    </div>
  );
}
