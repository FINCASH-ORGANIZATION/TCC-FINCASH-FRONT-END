
const Welcome = () => {
    return (
        <>
            <div className="flex flex-col justify-center font-mono">

                <div className="flex flex-col items-center">
                    <h1 className="max-w-3xl mt-10 font-bold text-9xl text-white text-center">Bem-vindo ao fincash</h1>
                    <p className="max-w-2xl text-xl">Gerir seu dinheiro da melhor forma possível, ter chances de ganhar mais grana começando do zero, só aqui na <a href="#" className="text-amareloPastel hover:text-amareloPastel">fincash</a></p>

                </div>
                <div className="flex justify-center">
                    <button className="transition-all rounded-full bg-amareloPastel mt-10 px-16 py-3 font-medium font-mono text-lg text-black hover:bg-amber-300 text-center">Saiba Mais</button>
                </div>
            </div>
        </>
    );
};

export default Welcome;