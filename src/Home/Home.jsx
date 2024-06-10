import { CardHome } from '../Card/CardHome.jsx'
import { HeaderHome } from '../header/header.jsx'
import { Link } from 'react-router-dom';
export function Home() {
    return (
        <>
            <HeaderHome/>
            <div className='absolute bg-cinzaClaro2 flex flex-col h-screen w-56 items-center justify-between font-mono'>
                <img src="./src/Image/logofincash.png" alt="Fincash Logo" style={{ width: '50%', height: 'auto', marginTop: '10%' }} />
                <button class="absolute bg-amareloPastel shadow-2xl rounded-full flex justify-center items-center" style={{ width: '50%', height: '10%', marginTop: '80%' }} >
                    <img src="../src/Image/botao.png" alt="" className='w-24 h-24' />
                </button>
                    <Link to={"/Home"}>
                        <div className='flex justify-center items-center' ><img src="../src/Image/casa.png" alt="" style={{ width: '40%', height: '8%', marginTop: '50%'}} /></div>
                    </Link>
                    <Link to={"/Contas"}>
                        <div className='flex justify-center items-center' ><img src="../src/Image/banco.png" alt="" style={{ width: '40%', height: '8%', }} /></div>
                    </Link>
                    <Link to={"/Transacao"}>
                        <div className='flex justify-center items-center' ><img src="../src/Image/lista.png" alt="" style={{ width: '40%', height: '8%', }} /></div>
                    </Link>
                    <Link to={"/Cartoes"}>
                        <div className='flex justify-center items-center' ><img src="../src/Image/card.png" alt="" style={{ width: '40%', height: '8%', marginBottom: '30%'}} /></div>
                    </Link>
            </div>


            <div className="bg-cinzaEscuro w-screen h-screen font-mono flex flex-col items-center justify-center">
                <CardHome />    
            </div>

            
        </>
    )
}
