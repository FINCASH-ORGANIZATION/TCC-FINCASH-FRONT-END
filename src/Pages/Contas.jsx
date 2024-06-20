import CardContas from "../CardPrincipal/cardContas.jsx";
import AddContas from "../CardPrincipal/AddContas.jsx";
import MostrarContas from "../CardPrincipal/MostrarContas.jsx";
import CardAddContas from "..//CardPrincipal/CardAddContas.jsx"
import { HeaderHome } from "../header/header.jsx";
import NavigationBar from "../NavBar/NavBar.jsx";

export default function Contas() {
    return (
        <>
            <HeaderHome />
            <div className="bg-cinzaEscuro w-screen h-screen font-mono flex justify-center items-center">
                <MostrarContas />
                <NavigationBar />
            </div>
            
        </>
    )

}