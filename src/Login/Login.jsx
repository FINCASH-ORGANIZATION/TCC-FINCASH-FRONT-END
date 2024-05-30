import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../Schema/loginSchema';
import { Link } from 'react-router-dom';
import { Input } from '../input/input';

export function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(loginSchema)
  });

  function onSubmitLogin(data) {
    console.log(data);
  }

  return (
    <>

      <div className="bg-cinzaEscuro w-screen h-screen flex items-center justify-center">
        <div className="">
          <a href=""><div className="text-2xl text-center text-amareloPastel">fincash</div></a>
          <div className="text-4xl text-center text-quaseBranco font-mono">Faça seu login</div>

          <form onSubmit={handleSubmit(onSubmitLogin)}>

            <h2 className="text-2xl text-quaseBranco my-4 font-mono">Endereço de email</h2>
            <Input
              type="email"
              name="email"
              className=""
              register={register}
            />
            {errors.email && <span>{errors.email.message}</span>}

            <h2 className="text-2xl text-quaseBranco my-4 font-mono">Senha</h2>
            <Input
              type="password"
              name="senha"
              className=""
              register={register}
            />
            {errors.senha && <span>{errors.senha.message}</span>}

            <a href="./ForgotPassword" className="text-2xl my-4 font-mono"><h2 className="mt-4 font-mono">Esqueceu a senha?</h2></a>
            <button className="bg-amareloPastel text-2xl font-bold font-mono my-4" type="submit" style={{ width: '40rem', height: '4rem', borderRadius: '10px' }}>
              Login
            </button>
            <div className="flex flex-row justify-center mt-2">

              <h2 className="text-2xl text-quaseBranco font-mono">Ainda não tem cadastro?</h2>
              <Link to={"/Registro"}>
                <div className="text-2xl font-mono"><h2 className="ml-2">Cadastre-se</h2></div>
              </Link>
            </div>

          </form>

        </div>
      </div>
    </>
  );
}