import { Link, useNavigate } from "react-router-dom";
import { Input } from "../input/input.jsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registroSchema } from "../Schema/registroSchema";
import { RegistrarUsu } from "../services/usuarioServico.js";
import Cookies from "js-cookie";

export function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registroSchema),
  });

  async function onSubmitRegistro(data) {
    try {
      const response = await RegistrarUsu(data);
      Cookies.set("token", response.data.token, { expires: 1 });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmitRegistro)}>
        <div className="bg-cinzaEscuro min-h-screen flex items-center justify-center">
          <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
            <div className="text-center">
              <div className="text-3xl text-amareloPastel">fincash</div>
              <div className="text-5xl mb-8 text-center text-quaseBranco">
                Faça seu cadastro
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-2">
              <div>
                <h2 className="text-3xl text-quaseBranco my-2">Nome</h2>

                <Input
                  type="nome"
                  placeholder=""
                  name="nome"
                  register={register}
                  className=""
                ></Input>

                {errors.nome && <span>{errors.nome.message}</span>}
              </div>
              <div>
                <h2 className="text-3xl text-quaseBranco my-2">Sobrenome</h2>

                <Input
                  type="sobrenome"
                  placeholder=""
                  name="sobrenome"
                  register={register}
                  className=""
                ></Input>

                {errors.sobrenome && <span>{errors.sobrenome.message}</span>}
              </div>

              <div className="col-span-2">
                <h2 className="text-3xl text-quaseBranco my-2">
                  Endereço de email
                </h2>

                <Input
                  type="email"
                  placeholder=""
                  name="email"
                  register={register}
                  className="col-span-2"
                ></Input>

                {errors.email && (
                  <span style={{ color: "red" }}>{errors.email.message}</span>
                )}
              </div>

              <div>
                <h2 className="text-3xl text-quaseBranco my-2">Senha</h2>

                <Input
                  type="senha"
                  placeholder=""
                  name="senha"
                  register={register}
                  className=""
                ></Input>
              </div>
              <div>
                <h2 className="text-3xl text-quaseBranco my-2">
                  Repita a senha
                </h2>

                <Input
                  type="confirmarsenha"
                  placeholder=""
                  name="confirmarsenha"
                  register={register}
                  className=""
                ></Input>
              </div>
            </div>

            <button
              className="bg-amareloPastel text-3xl font-bold font-mono my-4 w-full py-4 rounded-lg"
              type="submit"
            >
              Conecte-se
            </button>

            <div className="flex flex-row justify-center mt-2">
              <h2 className="font-normal text-3xl text-quaseBranco">
                Já tem cadastro?
              </h2>
              <Link
                to={"/Login"}
                className="ml-2 text-3xl text-azulClaro hover:underline"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
