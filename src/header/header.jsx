export function HeaderHome() {
    return(
    <header className="absolute bg-cinzaEscuro flex h-44 w-screen items-center justify-end font-mono">
        <nav className="flex items-center decoration-none text-branco">
            <a href="" className="pr-16 text-4xl text-white ">Home</a>
            <a href="" className="pr-16 text-4xl text-white ">Sobre os criadores</a>
            <a href="" className="pr-10 text-4xl text-white ">Contato</a>
            <a href="./Login">
                <button className="transition-all rounded-full bg-amareloPastel px-4 py-4 font-medium text-black hover:bg-amber-300 mr-16">
                    <img src="../src/Image/perfil.png" alt="" className='w-20 h-20' />
                </button>
            </a>
        </nav>
    </header>
    )
}