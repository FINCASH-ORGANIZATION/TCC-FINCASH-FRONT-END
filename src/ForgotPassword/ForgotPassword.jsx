import { useState, useEffect, useCallback } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "../input/input.jsx";
import "./ForgotPassword.css";
import {
  esqueceuSenhaAtualizar,
  esqueceuSenhaRedefinir,
} from "../services/usuarioServico";
import { EsqueceuSenhaSchema } from "../Schema/esqueceuSenhaSchema.js";

export function EsqueceuSenha() {
  const [senhatoken, setSenhatoken] = useState('');
  const [showOtpForm, setShowOtpForm] = useState(false);
  const [showNewPasswordForm, setShowNewPasswordForm] = useState(false);

  const {
    register: registerEmail,
    handleSubmit: handleSubmitEmail,
    formState: { errors: errorsEmail },
    getValues: getEmailValue,
  } = useForm({
    resolver: zodResolver(EsqueceuSenhaSchema.pick({ email: true })),
  });

  const {
    register: registerSenhatoken,
    handleSubmit: handleSubmitSenhatoken,
    formState: { errors: errorsSenhatoken },
    getValues: getSenhatokenValue,
  } = useForm({
    resolver: zodResolver(EsqueceuSenhaSchema.pick({ senhatoken: true })),
  });

  const {
    register: registerSenha,
    handleSubmit: handleSubmitSenha,
    formState: { errors: errorsSenha },
    getValues: getSenhaValue,
  } = useForm({
    resolver: zodResolver(EsqueceuSenhaSchema.pick({ senha: true })),
  });

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
    []
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
  }, [getSenhatokenValue]);

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
        const senha = getSenhaValue().senha;

        const requestData = {
          email,
          senhatoken: token,
          senha,
        };

        console.log("Dados combinados para enviar:", requestData);

        // Chamar a função para atualizar a senha enviando os dados combinados
        const response = await esqueceuSenhaAtualizar(requestData);
        console.log("Resposta de esqueceuSenhaAtualizar:", response);
      } catch (error) {
        console.error("Erro no onSubmitSenhaForm:", error);
      }
    },
    [senhatoken, getEmailValue, getSenhaValue]
  );

  useEffect(() => {
    if (showNewPasswordForm) {
      setShowOtpForm(false);
    }
  }, [showNewPasswordForm]);

  return (
    <div className="bg-cinzaEscuro min-h-screen flex items-center justify-center">
      <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12">
        <div className="text-center">
          <div className="text-3xl text-amareloPastel">fincash</div>
          <div className="text-5xl text-center text-quaseBranco">
            Esqueceu sua senha
          </div>
        </div>

        {!showOtpForm && !showNewPasswordForm && (
          <form onSubmit={handleSubmitEmail(onSubmitEsqueciSenha)} className="mt-8">
            <h2 className="text-3xl text-quaseBranco my-4">Endereço de email</h2>

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
          <form onSubmit={handleSubmitSenhatoken(onSubmitSenhatokenForm)} className="mt-8">
            <div className="text-3xl text-quaseBranco my-4">Token de Verificação</div>

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
        )}

        {showNewPasswordForm && (
          <form onSubmit={handleSubmitSenha(onSubmitSenhaForm)} className="mt-8">
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
    </div>
  );
}
