import AddCartao from "../CardPrincipal/AddCartao.jsx";
import NavigationBar from "../NavBar/NavBar.jsx";
import { HeaderHome } from "../header/header.jsx";

export default function Cartoes() {
    return (
        <>
            <HeaderHome />
            <div className="bg-cinzaEscuro w-screen h-screen font-mono flex justify-center items-center">
                <AddCartao/>
                <NavigationBar/>
            </div>
            
        </>
    )

}