import { EsqueceuSenhaSchema } from "../Schema/esqueceuSenhaSchema.js";
import { Input } from "../input/input.jsx";
import { InputFormShow } from "../input/inputFormShow.jsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
<<<<<<< Updated upstream
import { useState } from "react";
import "./ForgotPassword.css";

function onSubmitEsqueciSenha(data) {
  console.log(data);
}
=======
import { useState, useEffect, useCallback } from "react";
import { Input } from "../input/inputFormShow";
import { EsqueceuSenhaSchema } from "../Schema/esqueceuSenhaSchema";
import "./ForgotPassword.css";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  esqueceuSenhaAtualizar,
  esqueceuSenhaRedefinir,
} from "../services/usuarioServico";
>>>>>>> Stashed changes

export function EsqueceuSenha() {
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [showNewPasswordForm, setShowNewPasswordForm] = useState(false);
  const [senhatoken, setSenhatoken] = useState("");

  const {
<<<<<<< Updated upstream
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(EsqueceuSenhaSchema),
=======
    register: registerEmail,
    handleSubmit: handleSubmitEmail,
    formState: { errors: errorsEmail },
    setValue: setEmailValue,
    getValues: getEmailValue,
  } = useForm({
    resolver: zodResolver(EsqueceuSenhaSchema.pick({ email: true })),
  });

  const {
    register: registerSenhatoken,
    handleSubmit: handleSubmitSenhatoken,
    formState: { errors: errorsSenhatoken },
    setValue: setSenhatokenValue,
    getValues: getSenhatokenValue,
  } = useForm({
    resolver: zodResolver(EsqueceuSenhaSchema.pick({ senhatoken: true })),
>>>>>>> Stashed changes
  });

  const {
    register: registerSenha,
    handleSubmit: handleSubmitSenha,
    formState: { errors: errorsSenha },
    setValue: setSenhaValue,
    getValues: getSenhaValue,
  } = useForm({
    resolver: zodResolver(EsqueceuSenhaSchema.pick({ senha: true })),
  });

<<<<<<< Updated upstream
  const handleShowOtpForm = () => {
    setShowOtpForm(true);
  };
=======
  const onSubmitEsqueciSenha = useCallback(
    async (data) => {
      try {
        console.log("Dados recebidos no onSubmitEsqueciSenha:", data);
        await esqueceuSenhaRedefinir(data);
        setShowOtpForm(true);
      } catch (error) {
        console.error("Erro no onSubmitEsqueciSenha:", error);
      }
    },
    [esqueceuSenhaRedefinir]
  );

  const onSubmitSenhatokenForm = useCallback(async () => {
    try {
      const data = getSenhatokenValue(); // Obter valores atuais do formulário
      console.log("Dados recebidos no onSubmitSenhatokenForm:", data);
      setSenhatoken(data.senhatoken); // Armazenar o valor de senhatoken no estado
      setShowNewPasswordForm(true); // Mostrar o formulário de nova senha
    } catch (error) {
      console.error("Erro no onSubmitSenhatokenForm:", error);
    }
  }, [setSenhatoken, setShowNewPasswordForm, getSenhatokenValue]);

  const onSubmitSenhaForm = useCallback(
    async (formData) => {
      try {
        console.log("Dados recebidos no onSubmitSenhaForm:", formData);

        // Obter o valor do email do formulário
        const email = getEmailValue().email;

        // Obter o valor do senhatoken do estado
        const token = senhatoken;

        // Verificar se email e token estão definidos antes de prosseguir
        if (!email || !token) {
          throw new Error("Email ou token não definidos corretamente.");
        }

        // Obter o valor da senha usando getSenhaValue
        const senha = getSenhaValue();

        const requestData = {
          email: email,
          senhatoken: token,
          senha: senha.senha,
        };

        console.log("Dados combinados para enviar:", requestData);

        // Chamar a função para atualizar a senha enviando os dados combinados
        const response = await esqueceuSenhaAtualizar(requestData);
        console.log("Resposta de esqueceuSenhaAtualizar:", response);
      } catch (error) {
        console.error("Erro no onSubmitSenhaForm:", error);
      }
    },
    [senhatoken, getEmailValue, getSenhaValue, esqueceuSenhaAtualizar]
  );

  useEffect(() => {
    if (showNewPasswordForm) {
      setShowOtpForm(false);
    }
  }, [showNewPasswordForm]);
>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
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
=======
        {!showOtpForm && !showNewPasswordForm && (
          <form
            onSubmit={handleSubmitEmail(onSubmitEsqueciSenha)}
            className="mt-8"
          >
            <h2 className="text-3xl text-quaseBranco my-4">
              Endereço de email
            </h2>

            <Input
              type="email"
              placeholder=""
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

        {showOtpForm && !showNewPasswordForm && (
          <form
            onSubmit={handleSubmitSenhatoken(onSubmitSenhatokenForm)}
            className="mt-8"
          >
            <div className="text-3xl text-quaseBranco my-4">
              Token de Verificação
            </div>

            <Input
              type="text"
              placeholder=""
              name="senhatoken"
              register={registerSenhatoken}
              required
            />
            {errorsSenhatoken.senhatoken && (
              <span className="text-red-500">
                {errorsSenhatoken.senhatoken.message}
              </span>
            )}

            <button
              className="bg-amareloPastel text-3xl font-bold font-mono my-4 w-full py-4 rounded-lg"
              type="submit"
            >
              Verificar
            </button>
          </form>
>>>>>>> Stashed changes
        )}

        {showNewPasswordForm && (
          <form
            onSubmit={handleSubmitSenha(onSubmitSenhaForm)}
            className="mt-8"
          >
            <div className="text-3xl text-quaseBranco my-4">Nova Senha</div>

            <Input
              type="password"
              placeholder=""
              name="senha"
              register={registerSenha}
              required
            />
            {errorsSenha.senha && (
              <span className="text-red-500">{errorsSenha.senha.message}</span>
            )}

            <button
              className="bg-amareloPastel text-3xl font-bold font-mono my-4 w-full py-4 rounded-lg"
              type="submit"
            >
              Atualizar Senha
            </button>
          </form>
        )}
      </div>
    </>
  );
}
