import '../Welcome/Welcome.css'
const Welcome = () => {
    return (
        <>
            <header className="absolute bg-cinzaEscuro shadow-2xl shadow-black flex h-52 w-screen items-center justify-between font-mono">
                <span className="text-8xl text-quaseBranco ml-40">fincash</span>
                <span className="absolute"><img src="./src/Image/logofincash.png" alt="Fincash Logo" style={{ width: '65%', height: '45%', marginLeft: '20px'}} /></span>
            <div className="" >
                <a href="" className="pr-6 text-6xl text-quaseBranco">Sobre os criadores</a>
                <a href="" className="pr-6 text-6xl text-quaseBranco">Contato</a>
                <a href="./Login">
                    <button className="transition-all rounded-full bg-amareloPastel mr-5 px-20 py-5 font-mono text-6xl text-black hover:bg-amber-300 text-center">Faça seu login</button>
                </a>
            </div>
            </header>


            <div className=" bg-cinzaEscuro w-screen h-screen font-mono flex flex-col items-center justify-center">
                <h1 className="tittle text-white text-center mt-28 ">Bem-vindo ao <br /> fincash</h1>
                <p className="text-7xl text-center text-quaseBranco mt-20">Gerir seu dinheiro da melhor forma possível,<br/> ter chances de ganhar mais grana começando do zero,<br /> só aqui na <a href="#" className="text-amareloPastel hover:text-amareloPastel">fincash</a></p>                
                <button className="transition-all rounded-full bg-amareloPastel mt-32 px-32 py-10 font-mono text-6xl text-black hover:bg-amber-300 text-center">Saiba Mais</button>
            </div>               
        </>
    );
};

export default Welcome;