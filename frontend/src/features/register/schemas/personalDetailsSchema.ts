import { z } from "zod";

export const personalDetailsSchema = z.object({
    age: z.preprocess(
        (v) => (typeof v === "string" ? Number(v) : v),
        z.number().int().min(1, "Informe sua idade")
    ),

    gender: z
        .union([z.enum(["Homem", "Mulher", "Prefiro não dizer"] as const), z.undefined()])
        .refine((v) => v !== undefined, { message: "Escolha um gênero" }),
    height: z.preprocess(
        (v) => (typeof v === "string" ? Number(v) : v),
        z.number().int().min(1, "Informe sua altura")
    ),

    weight: z.preprocess(
        (v) => (typeof v === "string" ? Number(v) : v),
        z.number().int().min(1, "Informe seu peso")
    ),

    activity_level: z
        .union([
            z.enum([
                "Sedentário",
                "Levemente ativo",
                "Moderadamente ativo",
                "Muito ativo",
            ] as const),
            z.undefined(),
        ])
        .refine((v) => v !== undefined, { message: "Selecione o nível de atividade" })
});
