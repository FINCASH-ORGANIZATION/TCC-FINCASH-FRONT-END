import { EsqueceuSenhaSchema } from '../Schema/esqueceuSenhaSchema.js';
import { Input } from '../input/input.jsx';
import { Link } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

function onSubmitEsqueciSenha(data) {
  console.log(data);
}

function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(EsqueceuSenhaSchema)
  });

  return (
    <>
      <Link to={"/Login"}>
        <div><img src="./src/Image/back.png" alt="Seta de retorno" className="absolute m-5 w-6 h-6" /></div>
      </Link>
      <div className="bg-cinzaEscuro w-screen h-screen font-mono flex items-center justify-center">
        
        <div className="w-4/12">
          <div className="">
            <div className="text-3xl text-center text-amareloPastel">fincash</div>
            <div className="text-5xl text-center text-quaseBranco">Esqueceu sua senha</div>
          </div>

          <form onSubmit={handleSubmit(onSubmitEsqueciSenha)} >

            <h2 className="text-3xl text-quaseBranco my-4">Endereço de email</h2>

            <Input
              type="forgotpassword"
              placeholder=""
              name="forgotpassword"
              className=""
              register={register}
              required
            />
            {errors.forgotpassword && <span>{errors.forgotpassword.message}</span>}

            <button className="bg-amareloPastel text-3xl font-bold font-mono my-4" type="submit" style={{ width: '40rem', height: '5rem', borderRadius: '10px' }}>
              Nova Senha
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default ForgotPassword;
