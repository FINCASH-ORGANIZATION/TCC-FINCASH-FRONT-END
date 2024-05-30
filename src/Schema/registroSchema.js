import { z } from "zod";

export const registroSchema = z.object({
    nome: z.string().min(8, { message: "O nome é obrigatório" }),
    sobrenome: z.string().min(8, { message: "O sobrenome é obrigatório" }),
    email: z.string().email({ message: "O e-mail é obrigatório" }).toLowerCase(),
    senha: z.string().min(8, { message: "A senha precis ter no minimo 8 caracteres" }),

})


//.refine(value => !/^\s*$/.test(value))