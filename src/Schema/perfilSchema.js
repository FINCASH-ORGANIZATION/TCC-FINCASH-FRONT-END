import { z } from "zod";

export const perfilSchema = z.object({
  nome: z
    .string()
    .min(3, { message: "Nome deve ter no mínimo 3 caracteres" })
    .transform((nome) =>
      nome
        .trim()
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ")
    ),
  sobrenome: z
    .string()
    .min(3, { message: "Sobrenome deve ter no mínimo 3 caracteres" })
    .transform((sobrenome) =>
      sobrenome
        .trim()
        .split(" ")
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(" ")
    ),
  avatar: z.string(),
});
