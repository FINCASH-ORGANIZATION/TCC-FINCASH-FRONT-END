import { z } from "zod";

export const receitaSchema = z.object({
  descricao: z.string(),
  categoria: z.string(),
  valor: z.string(),
  data: z.string(),
  conta: z.string()
});

export const despesaSchema = z.object({
  descricao: z.string(),
  categoria: z.string(),
  valor: z.number(),
  data: z.number(),
  conta: z.string()
});
