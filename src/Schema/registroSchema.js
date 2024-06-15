import { z } from "zod";

export const registroSchema = z
  .object({
    nome: z
      .string()
      .min(3, { message: "Nome deve ter no mínimo 3 caracteres" })
      .transform((nome) =>
        nome
          .trim()
          .split(" ")
          .map((word) => word[0].toUpperCase() + word.slice(1))
          .join(" ")
      ),
    sobrenome: z
      .string()
      .min(3, { message: "Sobrenome deve ter no mínimo 3 caracteres" })
      .transform((sobrenome) =>
        sobrenome
          .trim()
          .split(" ")
          .map((word) => word[0].toUpperCase() + word.slice(1))
          .join(" ")
      ),

    email: z.string().email({ message: "E-mail inválido" }).toLowerCase(),
    senha: z.string().min(6, "A senha precisa ter no minímo 6 caracteres"),
    confirmarsenha: z
      .string()
      .min(6, "A senha precisa ter no minímo 6 caracteres"),
  })
  .refine((data) => data.senha === data.confirmarsenha, {
    message: "As senhas não correspondem",
    path: ["confirmarsenha"],
  });
