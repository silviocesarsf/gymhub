import { Input, PasswordInput } from "@mantine/core";

export default function RegisterBasicInfoStep() {
    return (
        <>
            <div className="flex flex-col items-start justify-center">
                <h1 className="text-xl font-bold">Informações básicas</h1>
                <p className="text-sm text-slate-500">Insira seus dados</p>
            </div>
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