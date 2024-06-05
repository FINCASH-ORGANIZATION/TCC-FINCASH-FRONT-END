
const Welcome = () => {
    return (
        <>
            <header className="bg-cinzaEscuro flex h-20 w-screen items-center justify-between font-mono">
                <span className="text-6xl text-quaseBranco ml-24 mt-10 ">fincash</span>
                <span className="absolute"><img src="./src/Image/logofincash.png" alt="Fincash Logo" style={{ width: '35%', height: '40%', marginLeft: '20px', marginTop: '3vh' }} /></span>
            <div className="mt-10" >
                <a href="" className="pr-6 text-3xl text-quaseBranco">Sobre os criadores</a>
                <a href="" className="pr-6 text-3xl text-quaseBranco">Contato</a>
                <a href="./Login">
                    <button className="transition-all rounded-full bg-amareloPastel mr-5 px-10 py-3 font-mono text-3xl text-black hover:bg-amber-300 text-center">Faça seu login</button>
                </a>
            </div>
            </header>
            <div className="bg-cinzaEscuro w-screen h-screen font-mono flex flex-col items-center">
                <h1 className="max-w-7xl font-bold text-white text-center mt-28" style={{fontSize: '142px'}}>Bem-vindo ao fincash</h1>
                <p className="max-w-5xl text-3xl text-quaseBranco">Gerir seu dinheiro da melhor forma possível, ter chances de ganhar mais grana começando do zero, só aqui na <a href="#" className="text-amareloPastel hover:text-amareloPastel">fincash</a></p>                
                <button className="transition-all rounded-full bg-amareloPastel mt-20 px-20 py-5 font-mono text-3xl text-black hover:bg-amber-300 text-center">Saiba Mais</button>
            </div>               
        </>
    );
};

export default Welcome;