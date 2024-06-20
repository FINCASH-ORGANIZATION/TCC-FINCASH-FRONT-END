import { EsqueceuSenhaSchema } from "../Schema/esqueceuSenhaSchema.js";
import { Input } from "../input/input.jsx";
import { InputFormShow } from "../input/inputFormShow.jsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./ForgotPassword.css";

function onSubmitEsqueciSenha(data) {
  console.log(data);
}

export function EsqueceuSenha() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(EsqueceuSenhaSchema),
  });

  const [showOtpForm, setShowOtpForm] = useState(false);

  const handleShowOtpForm = () => {
    setShowOtpForm(true);
  };

  return (
    <>
      <div>
        <div
          className={`bg-cinzaEscuro min-h-screen flex items-center justify-center ${
            showOtpForm ? "blur-md" : ""
          }`}
        >
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
                type="email"
                placeholder=""
                name="email"
                register={register}
              />
              {errors.email && <span>{errors.email.message}</span>}

              <button
                className="bg-amareloPastel text-3xl font-bold font-mono my-4 w-full py-4 rounded-lg"
                type="submit"
                onClick={handleShowOtpForm}
              >
                Nova Senha
              </button>
            </form>
          </div>
        </div>

        {showOtpForm && (
          <div
            className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition duration-500 ease-in-out ${
              showOtpForm ? "opacity-100" : "opacity-0"
            }`}
          >
            <form className="form">
              <div className="title">Token de Verificação</div>
              <p className="message">
                Por favor, insira o código que você recebeu no email
              </p>
              <div className="inputs">
                <InputFormShow
                  type="input"
                  placeholder=""
                  name="input"
                  register={register}
                />
                <InputFormShow
                  type="input"
                  placeholder=""
                  name="input"
                  register={register}
                />
                <InputFormShow
                  type="input"
                  placeholder=""
                  name="input"
                  register={register}
                />
                <InputFormShow
                  type="input"
                  placeholder=""
                  name="input"
                  register={register}
                />
              </div>
              <button className="action" type="submit">
                Verificar
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
