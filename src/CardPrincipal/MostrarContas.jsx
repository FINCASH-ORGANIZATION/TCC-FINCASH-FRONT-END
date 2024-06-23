import { Input } from "../input/input";

export default function MostrarContas() {
  return (
    <div className="flex flex-col mb-20">
      <h1 className="text-7xl text-white text-center mb-16">Suas Contas</h1>
      <div className="grid grid-cols-3 gap-y-10">
        <div className="flex flex-col justify-center items-center">
          <div className="card bg-white w-10/12 p-5 shadow-2xl rounded-3xl shadow-black flex flex-col">
            <div className="flex justify-between items-center">
              <span className="text-5xl">Conta 1</span>
              <button className="bg-red-500 px-10 text-5xl text-white py-5 rounded-2xl">
                Deletar
              </button>
            </div>
            <img src="../src/Image/bb.png" alt="" className="w-28 h-28" />
            <Input
              type=""
              className="InputPrincipal placeholder:text-7xl"
              placeholder="R$0,00"
            />
            <span className="text-3xl my-2" type="text" placeholder="Descrição">
              Descrição
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="card bg-white w-10/12 p-5 shadow-2xl rounded-3xl shadow-black flex flex-col">
            <div className="flex justify-between items-center">
              <span className="text-5xl">Canta 2</span>
              <button className="bg-red-500 px-10 text-5xl text-white py-5 rounded-2xl">
                Deletar
              </button>
            </div>
            <img src="../src/Image/nubank.png" alt="" className="w-28 h-28" />
            <Input
              type=""
              className="InputPrincipal placeholder:text-7xl"
              placeholder="R$0,00"
            />
            <span className="text-3xl my-2" type="text" placeholder="Descrição">
              Descrição
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="card bg-white w-10/12 p-5 shadow-2xl rounded-3xl shadow-black flex flex-col">
            <div className="flex justify-between items-center">
              <span className="text-5xl">Conta 3</span>
              <button className="bg-red-500 px-10 text-5xl text-white py-5 rounded-2xl">
                Deletar
              </button>
            </div>
            <img src="../src/Image/bradesco.png" alt="" className="w-28 h-28" />
            <Input
              type=""
              className="InputPrincipal placeholder:text-7xl"
              placeholder="R$0,00"
            />
            <span className="text-3xl my-2" type="text" placeholder="Descrição">
              Descrição
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="card bg-white w-10/12 p-5 shadow-2xl rounded-3xl shadow-black flex flex-col">
            <div className="flex justify-between items-center">
              <span className="text-5xl">Conta 4</span>
              <button className="bg-red-500 px-10 text-5xl text-white py-5 rounded-2xl">
                Deletar
              </button>
            </div>
            <img
              src="../src/Image/santander.png"
              alt=""
              className="w-28 h-28"
            />
            <Input
              type=""
              className="InputPrincipal placeholder:text-7xl"
              placeholder="R$0,00"
            />
            <span className="text-3xl my-2" type="text" placeholder="Descrição">
              Descrição
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="card bg-white w-10/12 p-5 shadow-2xl rounded-3xl shadow-black flex flex-col">
            <div className="flex justify-between items-center">
              <span className="text-5xl">Conta 5</span>
              <button className="bg-red-500 px-10 text-5xl text-white py-5 rounded-2xl">
                Deletar
              </button>
            </div>
            <img
              src="../src/Image/intermedium.png"
              alt=""
              className="w-28 h-28"
            />
            <Input
              type=""
              className="InputPrincipal placeholder:text-7xl"
              placeholder="R$0,00"
            />
            <span className="text-3xl my-2" type="text" placeholder="Descrição">
              Descrição
            </span>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <div className="card bg-white w-10/12 p-5 shadow-2xl rounded-3xl shadow-black flex flex-col">
            <div className="flex justify-between items-center">
              <span className="text-5xl">Conta 6</span>
              <button className="bg-red-500 px-10 text-5xl text-white py-5 rounded-2xl">
                Deletar
              </button>
            </div>
            <img src="../src/Image/caixa.png" alt="" className="w-28 h-28" />
            <Input
              type=""
              className="InputPrincipal placeholder:text-7xl"
              placeholder="R$0,00"
            />
            <span className="text-3xl my-2" type="text" placeholder="Descrição">
              Descrição
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
