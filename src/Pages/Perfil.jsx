
import { HeaderHome } from "../header/header.jsx";

export default function Perfil() {
    return(
        <>
        <HeaderHome />
        <div className="bg-cinzaEscuro w-screen h-screen font-mono flex flex-col items-center justify-center">
            <div className="bg-cinzaClaro1 flex flex-col justify-center items-center pr-20 pl-20 pt-10 rounded-3xl shadow-2xl shadow-black">

                <img src="" alt="" />

                <button className="transition-all rounded-full bg-amareloPastel px-3 py-3 font-medium text-black hover:bg-amber-300">
                    <img src="../src/Image/perfil.png" alt="" className="w-24 h-24" />
                </button>



                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2">
                <div className="text-center col-span-2">
                    <h2 className="text-3xl text-quaseBranco my-2">Nome</h2>
                    <h3 className="text-3xl text-cinzaClaro2">Thomaz Feitosa Lindão</h3>
                </div>

                <div className="text-center col-span-2">
                    <h2 className="text-3xl text-quaseBranco my-2">
                    Endereço de email
                    </h2>
                    <h3 className="text-3xl text-cinzaClaro2">thomazmello05@gmail.com</h3>
                </div>
                </div>


                <div className="flex justify-between mt-20 w-full">
                    <button className="bg-azulclaro text-3xl font-bold font-mono px-9 my-4 mr-3 text-quaseBranco py-4 rounded-lg" type="submit">
                        Editar
                    </button>

                    <button className="bg-red-500 text-3xl font-bold font-mono px-12 my-4 ml-3 text-quaseBranco py-4 rounded-lg" type="submit">
                        Sair
                    </button>
                </div>
            </div>
        </div>
        </>
    )
}