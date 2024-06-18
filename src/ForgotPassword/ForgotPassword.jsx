import { useForm } from "react-hook-form";
import { useState } from "react";
import { Input } from "../input/inputFormShow";
import { EsqueceuSenhaSchema } from "../Schema/esqueceuSenhaSchema";
import "./ForgotPassword.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { esqueceuSenhaa } from "../services/usuarioServico";

export function EsqueceuSenha() {
  const {
    register: registerEmail,
    handleSubmit: handleSubmitEmail,
    formState: { errors: errorsEmail },
  } = useForm({
    resolver: zodResolver(EsqueceuSenhaSchema.pick({ email: true })),
  });

  const {
    register: registerToken,
    handleSubmit: handleSubmitToken,
    formState: { errors: errorsToken },
  } = useForm({
    resolver: zodResolver(EsqueceuSenhaSchema.pick({ token: true })),
  });

  const [showOtpForm, setShowOtpForm] = useState(false);

  async function onSubmitEsqueciSenha(data) {
    try {
      console.log("Dados recebidos no onSubmitEsqueciSenha:", data);

      console.log("Dados do formulário de token:", data);
      const response = await esqueceuSenhaa(data);
      setShowOtpForm(true);
    } catch (error) {
      console.log(error);
    }
  }

  async function onSubmitTokenForm(data) {
    try {
      console.log("Dados do formulário de token:", data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bg-cinzaEscuro min-h-screen flex items-center justify-center">
      <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
        <div className="text-center">
          <div className="text-3xl text-amareloPastel">fincash</div>
          <div className="text-5xl text-quaseBranco">Esqueceu sua senha</div>
        </div>

        {/* Formulário para enviar o email de recuperação de senha */}
        {!showOtpForm && (
          <form
            onSubmit={handleSubmitEmail(onSubmitEsqueciSenha)}
            className="mt-8"
          >
            <h2 className="text-3xl text-quaseBranco my-4">
              Endereço de email
            </h2>

            <Input
              type="email"
              placeholder="Digite seu endereço de email"
              name="email"
              register={registerEmail}
              required
            />
            {errorsEmail.email && (
              <span className="text-red-500">{errorsEmail.email.message}</span>
            )}

            <button
              className="bg-amareloPastel text-3xl font-bold font-mono my-4 w-full py-4 rounded-lg"
              type="submit"
            >
              Nova Senha
            </button>
          </form>
        )}

        {showOtpForm && (
          <form
            onSubmit={handleSubmitToken(onSubmitTokenForm)}
            className="mt-8"
          >
            <div className="text-3xl text-quaseBranco my-4">
              Token de Verificação
            </div>

            <div className="grid grid-cols-4 gap-4">
              <Input
                type="text"
                placeholder="Digite o token recebido"
                name="token"
                register={registerToken}
                required
              />
              {errorsToken.token && (
                <span className="text-red-500">
                  {errorsToken.token.message}
                </span>
              )}
            </div>

            <button
              className="bg-amareloPastel text-3xl font-bold font-mono my-4 w-full py-4 rounded-lg"
              type="submit"
            >
              Verificar
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
