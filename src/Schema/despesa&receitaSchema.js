import { z } from "zod";

export const receitaSchema = z.object({
  descricao: z.string().min(1, "Descrição é obrigatória"),
  categoria: z.string().min(1, "Categoria é obrigatória"),
  valor: z.number().min(0.01, "Valor deve ser maior que zero"),
  data: z.number(),
});

export const despesaSchema = z.object({
  descricao: z.string().min(1, "Descrição é obrigatória"),
  categoria: z.string().min(1, "Categoria é obrigatória"),
  valor: z.number().min(0.01, "Valor deve ser maior que zero"),
  data: z.number(),
});
