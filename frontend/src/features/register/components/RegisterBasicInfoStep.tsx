import { Input, PasswordInput } from "@mantine/core";
import { useFormContext } from "react-hook-form";

export default function RegisterBasicInfoStep() {
    const { register, formState: { errors } } = useFormContext();
    return (
        <>
            <Input.Wrapper
                error={errors.name ? String(errors.name.message) : undefined}
                label="Nome">
                <Input
                    {...register("name")}
                    placeholder="Insira seu nome completo" />
            </Input.Wrapper>
            <Input.Wrapper
                error={errors.email ? String(errors.email.message) : undefined}
                label="Email">
                <Input
                    {...register("email")}
                    type="email"
                    placeholder="Insira seu email" />
            </Input.Wrapper>
            <Input.Wrapper
                error={errors.password ? String(errors.password.message) : undefined}
                label="Senha">
                <PasswordInput
                    {...register("password")}
                    placeholder="Insira sua senha" />
            </Input.Wrapper>
            <Input.Wrapper
                error={errors.confirmPassword ? String(errors.confirmPassword.message) : undefined}
                label="Confirmar senha">
                <PasswordInput
                    {...register("confirmPassword")}
                    placeholder="Confirme sua senha" />
            </Input.Wrapper>
        </>
    )
}