import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../Schema/loginSchema';
import { Input } from '../input/input.jsx';
import { Link } from 'react-router-dom';

export function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema)
  });

  function onSubmitLogin(data) {
    console.log(data);
  }

  return (
    <>
      <Link to={"/"}>
        <div><img src="./src/Image/back.png" alt="Seta de retorno" className="absolute m-5 w-6 h-6" /></div>
      </Link>
      <div className="bg-cinzaEscuro w-screen h-screen font-mono flex items-center justify-center">

        <div className="w-4/12">
          <div className="">
            <div className="text-3xl text-center text-amareloPastel">fincash</div>
            <div className="text-5xl text-center text-quaseBranco">Faça seu login</div>
          </div>

          <form onSubmit={handleSubmit(onSubmitLogin)} >

            <h2 className="text-3xl text-quaseBranco my-4">Endereço de email</h2>
            <Input
              type="email"
              placeholder=""
              name="email"
              className=""
              register={register}
            />
            {errors.email && <span style={{color: 'red'}}>{errors.email.message}</span>}

            <h2 className="text-3xl text-quaseBranco my-4">Senha</h2>
            <Input
              type="password"
              placeholder=""
              name="senha"
              className=""
              register={register}
            />
            {errors.senha && <span style={{color: 'red'}}>{errors.senha.message}</span>}
            <Link to={"/Esqueceu-Senha"}>
              <h2 className="text-3xl">Esqueceu a senha?</h2>
            </Link>
            <button className="bg-amareloPastel text-3xl font-bold font-mono my-4" type="submit" style={{ width: '40rem', height: '5rem', borderRadius: '10px' }}>
              Login
            </button>
            <div className="flex flex-row justify-center mt-2">

              <h2 className="text-3xl text-quaseBranco">Ainda não tem cadastro?</h2>
              <Link to={"/Registro"}>
                <div className="ml-2 text-3xl"><h2 className="">Cadastre-se</h2></div>
              </Link>
            </div>

          </form>

        </div>
      </div>
    </>
  );
}