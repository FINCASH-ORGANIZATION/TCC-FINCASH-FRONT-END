function Header() {
    return (
        <>
            <header className="bg-cinzaClaro shadow-md flex h-16 w-screen items-center justify-between font-mono">
                <span className="text-4xl text-quaseBranco ml-16 ">fincash</span>

                <div className=" decoration-none text-branco">
                    <a href="" className="text-xl pr-16 pl-96 text-white ">Home</a>
                    <a href="" className="text-xl pr-16 text-white ">Sobre Nós</a>
                    <a href="" className="text-xl text-white ">Contato</a>

                </div>
                <a href="./Perfil"><button className="rounded-full bg-amareloPastel w-10 h-10 font-medium text-black mr-16"></button></a>
            </header>
        </>
    )
}

export default Header