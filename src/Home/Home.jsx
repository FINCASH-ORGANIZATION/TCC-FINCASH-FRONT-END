import { CardHome } from '../Card/CardHome.jsx'
import { HeaderHome } from '../header/header.jsx'
export function Home() {
    return (
        <>
            <HeaderHome/>
            <div className='absolute bg-cinzaClaro2 flex flex-col h-screen w-56 items-center justify-between font-mono'>
                <img src="./src/Image/logofincash.png" alt="Fincash Logo" style={{ width: '50%', height: 'auto', marginTop: '10%' }} />
                <button class="absolute bg-amareloPastel shadow-2xl rounded-full flex justify-center items-center" style={{ width: '50%', height: '10%', marginTop: '80%' }} >
                    <img src="../src/Image/botao.png" alt="" className='w-24 h-24' />
                </button>
                <img src="../src/Image/casa.png" alt="" style={{ width: '50%', height: '10%', marginTop: '80%' }} />
            </div>


            <div className="bg-cinzaEscuro w-screen h-screen font-mono flex flex-col items-center justify-center">
                <CardHome />
            </div>
        </>
    )
}
