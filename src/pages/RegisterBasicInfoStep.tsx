import { Input, PasswordInput } from "@mantine/core";

export default function RegisterBasicInfoStep() {
    return (
        <>
            <Input.Wrapper label="Nome">
                <Input placeholder="Insira seu nome completo" />
            </Input.Wrapper>
            <Input.Wrapper label="Email">
                <Input type="email" placeholder="Insira seu email" />
            </Input.Wrapper>
            <Input.Wrapper label="Senha">
                <PasswordInput placeholder="Insira sua senha" />
            </Input.Wrapper>
            <Input.Wrapper label="Confirmar senha">
                <PasswordInput placeholder="Confirme sua senha" />
            </Input.Wrapper>
        </>
    )
}