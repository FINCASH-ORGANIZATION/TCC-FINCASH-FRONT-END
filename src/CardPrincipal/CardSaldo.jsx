import '../CardPrincipal/CardSaldoStyled.css'

export default function CardSaldo() {
  return (
    <div className="w-10/12 h-1/2 absolute mt-40 rounded-3xl flex justify-center">
      <div className="card bg-cinzaClaro2 w-11/12 h-1/12 rounded-3xl p-4 shadow-2xl shadow-black">
        <div className='flex justify-between '>
          <span className='text-6xl text-cinzaClaro5'>Saldo</span>
          <img src="../src/Image/saldo.png" alt="" className='w-24 h-24'/>
        </div>
        <span className='text-5xl text-white'>R$ 0,00</span>
      </div>
    </div>
  );
}
