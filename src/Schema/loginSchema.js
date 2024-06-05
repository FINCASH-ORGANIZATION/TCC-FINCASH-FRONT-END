import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email({ message: "O e-mail é obrigatório" }).toLowerCase(),
    senha: z.string().min(8, { message: "A senha deve ter no minimo 6 caracteres." })
})


//.refine(value => !/^\s*$/.test(value))    