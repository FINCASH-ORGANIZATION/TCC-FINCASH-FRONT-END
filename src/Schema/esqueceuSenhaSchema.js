import { z } from "zod";

export const EsqueceuSenhaSchema = z.object({
  email: z.string().email({ message: "E-mail inválido" }).toLowerCase(),
  token: z
    .string()
    .max(6, { message: "O token deve ter no máximo 6 caracteres" }),
});
