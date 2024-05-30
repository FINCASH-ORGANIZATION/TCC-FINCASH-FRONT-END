import Header from "../Header/Header"

function Home() {
    return (
        <>
        <Header />
        <div className="container w-screen mx-auto mt-10 flex items-center justify-center">
            <div className="card w-screen py-4 px-6 m-4 rounded-md max-w-prose">
                <div className="mt-3 grid grid-cols-4 gap-x-6 gap-y-1">
                    <div className="bg-cinzaClaro" > Saldo Atual </div>
                    <div className="bg-cinzaClaro" > Receitas </div>
                    <div className="bg-cinzaClaro" > Despesas </div>
                    <div className="bg-cinzaClaro" > Balanço </div>
                </div>
            </div>
       </div>
        </>
    )
}

export default Home