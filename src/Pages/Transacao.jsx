import NavigationBar from "../NavBar/NavBar.jsx";
import { HeaderHome } from "../header/header.jsx";
import { CardTransacao } from "../CardPrincipal/CardTransacao.jsx"


export default function Cartoes() {
    return (
        <>
            <HeaderHome />
            <div className="bg-cinzaEscuro w-screen h-screen font-mono flex justify-center items-center">
                <CardTransacao />
                <NavigationBar />
            </div>
            
        </>
    )

}