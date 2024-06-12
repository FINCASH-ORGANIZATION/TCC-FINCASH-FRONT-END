export function HeaderHome() {
    return(
    <header className="absolute bg-cinzaEscuro shadow-lg shadow-black flex h-32 w-screen items-center justify-end font-mono">
        <nav className="flex items-center decoration-none text-branco">
            <div className="absolute flex items-center left-0 ml-16 w-24 h-24">
                <img src="./src/Image/logofincash.png" alt="" className="" />
                <span className="text-5xl" >fincash</span>
            </div>
            <a href="" className="pr-16 text-4xl text-white ">Home</a>
            <a href="" className="pr-16 text-4xl text-white ">Sobre os criadores</a>
            <a href="" className="pr-10 text-4xl text-white ">Contato</a>
            <a href="./Login">
                <button className="transition-all rounded-full bg-amareloPastel px-4 py-4 font-medium text-black hover:bg-amber-300 mr-16">
                    <img src="../src/Image/perfil.png" alt="" className='w-14 h-14' />
                </button>
            </a>
        </nav>
    </header>
    )
}