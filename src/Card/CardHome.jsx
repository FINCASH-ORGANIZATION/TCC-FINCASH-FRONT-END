export function CardHome() {
    return (
        <>
        <div className="bg-cinzaEscuro ml-56 w-screen h-screen font-mono flex items-center justify-center">
            <div className="Card bg-cinzaClaro2 m-8 w-2/12 h-1/6 rounded-3xl">
                <div className="flex ">
                    <h1 className="p-4 text-4xl text-cinzaClaro5">Saldo</h1>
                    <a href="">
                        <img src="../src/Image/saldo.png" alt="" className="absolute w-14 h-14 ml-28 mt-4" />
                    </a>
                </div>
                <h1 className="pl-4 mt-4 text-5xl text-quaseBranco">R$1982,93</h1>
            </div>


            <div className="Card bg-cinzaClaro2 m-8 w-2/12 h-1/6 rounded-3xl">
                <div className="flex ">
                    <h1 className="p-4 text-4xl text-cinzaClaro5">Receitas</h1>
                    <a href="">
                        <img src="../src/Image/receitas.png" alt="" className="absolute w-14 h-14 ml-14 mt-4" />
                    </a>
                </div>
                <h1 className="pl-4 mt-4 text-5xl text-quaseBranco">R$785,98</h1>
            </div>
            
            
            <div className="Card bg-cinzaClaro2 m-8 w-2/12 h-1/6 rounded-3xl">
                <div className="flex ">
                    <h1 className="p-4 text-4xl text-cinzaClaro5">Despesas</h1>
                    <a href="">
                        <img src="../src/Image/despesas.png" alt="" className="absolute w-14 h-14 ml-14 mt-4" />
                    </a>
                </div>
                <h1 className="pl-4 mt-4 text-5xl text-quaseBranco">R$340,90</h1>
            </div>
            
            
            <div className="Card bg-cinzaClaro2 m-8 w-2/12 h-1/6 rounded-3xl">
                <div className="flex ">
                    <h1 className="p-4 text-4xl text-cinzaClaro5">Cartões</h1>
                    <a href="">
                        <img src="../src/Image/cartoes.png" alt="" className="absolute w-14 h-14 ml-20 mt-4" />
                    </a>
                </div>
                <h1 className="pl-4 mt-4 text-5xl text-quaseBranco">R$1009,43</h1>
            </div>
        </div>
        </>
    )
};