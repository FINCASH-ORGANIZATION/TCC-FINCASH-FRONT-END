import { z } from "zod";

export const EsqueceuSenhaSchema = z.object({
    email: z.string().email({ message: "O preenchimento do e-mail é obrigatório." }).toLowerCase(),
})
