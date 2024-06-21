export default function AddPrincipalHome() {
    return (
      <div className="absolute flex justify-center items-center mt-52">
        <div className="flex flex-col justify-center items-center mr-10">
            <span className="text-8xl text-white">Adicionar receitas</span>
            <div className="bg-white p-36 mt-5 rounded-3xl shadow-2xl shadow-black ">
                <buttom className="flex flex-col justify-center items-center">
                    <img src="../src/Image/mais.png" alt="" className="w-44"/>
                    <span className="text-8xl text-black">Adicionar <span className="text-green-600">receitas</span></span>
                </buttom>
            </div>
        </div>


        <div className="flex flex-col justify-center items-center ml-10">
            <span className="text-8xl text-white">Adicionar despesas</span>
            <div className="bg-white p-36 mt-5 rounded-3xl shadow-2xl shadow-black ">
                <buttom className="flex flex-col justify-center items-center">
                    <img src="../src/Image/mais.png" alt="" className="w-44"/>
                    <span className="text-8xl text-black">Adicionar <span className="text-red-600">despesas</span></span>
                </buttom>
            </div>
        </div>

      </div>
    );
  }