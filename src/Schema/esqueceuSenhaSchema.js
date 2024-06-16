import { z } from "zod";

export const EsqueceuSenhaSchema = z.object({
  email: z.string().email({ message: "O e-mail é obrigatório" }).toLowerCase(),
  input: z.number().max(1),
});
