import { Anchor, Button, Checkbox, Input, PasswordInput } from "@mantine/core";
import { FaGoogle } from "react-icons/fa"
import HeroWorkout from "../assets/workout_hero.png"
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    return (
        <div className="w-full min-h-screen flex items-center justify-center">
            <div className="w-full h-full flex items-center justify-center flex-col gap-8">
                <div className="flex flex-col">
                    <h1 className="text-3xl font-semibold">Bem vindo de volta</h1>
                    <p className="text-md">Entre ou crie sua conta para começar</p>
                </div>
                <form className="flex h-full w-[70%] flex-col items-center justify-center gap-4 mt-2">
                    <Input.Wrapper label="Email" className="w-full">
                        <Input type="email" className="w-full" placeholder="Digite seu email" />
                    </Input.Wrapper>
                    <Input.Wrapper label="Senha" className="w-full">
                        <PasswordInput type="password" className="w-full" placeholder="Digite sua senha" />
                    </Input.Wrapper>
                    <div className="flex w-full items-center justify-between">
                        <Checkbox
                            style={{
                                width: "100%",
                                flex: 1
                            }}
                            label="Lembrar de mim"
                        />
                        <Anchor style={{
                            fontSize: ".8em",
                            textAlign: "right",
                            flex: 1
                        }}>Esqueceu sua senha ?</Anchor>
                    </div>
                    <div className="flex w-full items-center justify-center flex-col gap-4 mt-8">
                        <Button fullWidth>Entrar</Button>
                        <div className="flex items-center justify-center gap-4 w-full">
                            <span className="w-full flex-1 bg-slate-200 h-[1px]"></span>
                            <h1 className="text-slate-500 text-xs">OU CONTINUE</h1>
                            <span className="w-full flex-1 bg-slate-200 h-[1px]"></span>
                        </div>
                        <Button leftSection={
                            <FaGoogle />
                        } fullWidth variant="outline">Com Google</Button>
                    </div>
                </form>
                <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
                    <span>Não tem uma conta ?</span>
                    <Anchor onClick={() => navigate("/auth/register")} style={{
                        fontSize: '0.875rem'
                    }}>Criar conta</Anchor>
                </div>
            </div>
            <div className="min-h-screen min-w-[60%] hidden relative xl:block">
                <div className="w-full h-full bg-brand-600 absolute z-10 opacity-20">

                </div>
                <img className="w-full absolute top-0 left-0 h-full object-cover" src={HeroWorkout} />
            </div>
        </div>
    )
}