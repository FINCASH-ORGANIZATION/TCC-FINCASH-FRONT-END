import { z } from "zod";

export const formTransacaoSchema = z.object({
  valor: z.number(),
  data: z.date(),
  descricao: z.string(),
  tipoTransacao: z.enum(["despesa", "receita"]),
  categoria: z.string(),
  formaPagamento: z.string(),
  conta: z.string(),
  notas: z.string(),
});
