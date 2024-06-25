import { z } from "zod";

export const contaSchema = z.object({
  conta: z.string(),
});
