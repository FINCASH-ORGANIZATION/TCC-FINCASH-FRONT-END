import { EsqueceuSenhaSchema } from "../Schema/esqueceuSenhaSchema.js";
import { Input } from "../input/input.jsx";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

function onSubmitEsqueciSenha(data) {
  console.log(data);
}

function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(EsqueceuSenhaSchema),
  });

  return (
    <>
      <div>
        <div className="bg-cinzaEscuro min-h-screen flex items-center justify-center">
          <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
            <div className="text-center">
              <div className="text-3xl text-amareloPastel">fincash</div>
              <div className="text-5xl text-center text-quaseBranco">
                Esqueceu sua senha
              </div>
            </div>

            <form
              onSubmit={handleSubmit(onSubmitEsqueciSenha)}
              className="mt-8"
            >
              <h2 className="text-3xl text-quaseBranco my-4">
                Endereço de email
              </h2>

              <Input
                type="forgotpassword"
                placeholder=""
                name="forgotpassword"
                register={register}
                required
              />
              {errors.forgotpassword && (
                <span>{errors.forgotpassword.message}</span>
              )}

              <button
                className="bg-amareloPastel text-3xl font-bold font-mono my-4 w-full py-4 rounded-lg"
                type="submit"
              >
                Nova Senha
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
