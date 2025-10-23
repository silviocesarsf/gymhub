import { z } from "zod";
export const basicInfoSchema = z.object({
    name: z.string().min(2, "Informe seu nome"),
    email: z.string().nonempty("Informe seu email").email("Email inválido"),
    password: z.string()
        .nonempty("Senha obrigatória")
        .min(8, "Senha deve ter no mínimo 8 caracteres")
        .max(32, "Senha deve ter no máximo 32 caracteres")
        .regex(/[A-Z]/, "Senha deve conter pelo menos uma letra maiúscula")
        .regex(/[a-z]/, "Senha deve conter pelo menos uma letra minúscula")
        .regex(/[0-9]/, "Senha deve conter pelo menos um número")
        .regex(/[\W_]/, "Senha deve conter pelo menos um caractere especial"),
    confirmPassword: z.string().nonempty("Confirme sua senha")
}).refine((data) => data.password == data.confirmPassword, {
    message: "Senhas não coincidem",
    path: ["confirmPassword"]
})