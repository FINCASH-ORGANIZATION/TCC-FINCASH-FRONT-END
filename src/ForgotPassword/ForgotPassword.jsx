import { Input } from '../input/input.jsx';
import { Link } from "react-router-dom"

function ForgotPassword() {
  return (
    <>
      <Link to={"/Login"}>
        <div><img src="./src/Image/back.png" alt="Seta de retorno" className="absolute m-5 w-6 h-6" /></div>
      </Link>
      <div className="bg-cinzaEscuro w-screen h-screen font-mono flex items-center justify-center">
        <div className="">
          <div className="">
            <div className="text-3xl text-center text-amareloPastel">fincash</div>
            <div className="text-5xl text-center text-quaseBranco">Esqueceu sua senha</div>
          </div>
          <h2 className="text-3xl text-quaseBranco my-4">Endereço de email</h2>
          <Input
            type="password"
            placeholder=""
            name="senha"
            className=""
            register={register}
          />
          <button className="bg-amareloPastel text-3xl font-bold font-mono my-4" type="submit" style={{ width: '40rem', height: '5rem', borderRadius: '10px' }}>Nova Senha</button>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword