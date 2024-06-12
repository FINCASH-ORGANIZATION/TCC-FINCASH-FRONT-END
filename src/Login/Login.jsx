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

  // Adicionei a biblioteca do Google Sign-In
  <script async src="https://apis.google.com/js/api:client.js"></script>

  // Inicialize o Google Sign-In
  gapi.load('auth2', () => {
    gapi.auth2.init({
      client_id: '359347471606-l5573qpp8efj60hvefimfmcpab6pkbic.apps.googleusercontent.com',
      scope: 'profile email',
    });
  });

  // Crie um botão de login com o Google
  const handleGoogleLogin = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  return (
    <>
      <div className="bg-cinzaEscuro min-h-screen flex items-center justify-center">
        <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
          <div className="text-center">
            <div className="text-3xl text-amareloPastel">fincash</div>
            <div className="text-5xl text-quaseBranco">Faça seu login</div>
          </div>

          <form onSubmit={handleSubmit(onSubmitLogin)} className="mt-8">

            <h2 className="text-3xl text-quaseBranco my-4">Endereço de email</h2>
            <Input
              type="email"
              placeholder=""
              name="email"
              className=""
              register={register}
            />
            {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}

            <h2 className="text-3xl text-quaseBranco my-4">Senha</h2>
            <Input
              type="senha"
              placeholder=""
              name="senha"
              className=""
              register={register}
            />
            {errors.senha && <span style={{ color: 'red' }}>{errors.senha.message}</span>}
            <Link to={"/Esqueceu-Senha"}>
              <h2 className="text-3xl">Esqueceu a senha?</h2>
            </Link>

            <button className="bg-amareloPastel text-3xl font-bold font-mono my-4 text-cinzaEscuro w-full py-4 rounded-lg" type="submit">
              Login
            </button>


            <button onClick={handleGoogleLogin} className="bg-blue-500 text-3xl font-bold font-mono my-4 text-white w-full py-4 rounded-lg">
              Login com o Google
            </button>

            <div className="flex flex-row justify-center mt-2">
              <h2 className="text-3xl text-quaseBranco">Ainda não tem cadastro?</h2>
              <Link to={"/Registro"}>
                <div className="ml-2 text-3xl"><h2>Cadastre-se</h2></div>
              </Link>
            </div>

          </form>

        </div>
      </div>
    </>
  );
}