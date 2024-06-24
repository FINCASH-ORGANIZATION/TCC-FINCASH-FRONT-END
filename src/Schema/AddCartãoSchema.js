import { z } from "zod";

export const AddCartãoSchema = z.object({
    valor: z.string(), // Ajuste os tipos conforme necessário
    descricao: z.string(),
    limite: z.string(),
    fechamento: z.string(),
    vencimento: z.string(),
  });