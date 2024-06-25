import { z } from "zod";

export const transacaoSchema = z.object({
  valor: z.number(),
  data: z.date(), // Aqui utilizei z.date() para garantir que a data seja do tipo Date
  descricao: z.string(),
  categoria: z.string(),
  tipoTransacao: z.string(),
  conta: z.string(),
});
