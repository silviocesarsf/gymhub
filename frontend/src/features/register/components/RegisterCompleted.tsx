import { Button, Container } from "@mantine/core";
import { FaCheckCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function RegisterCompleted() {
    return (
        <div className="w-full min-h-screen flex items-center justify-center flex-col">
            <Container>
                <div className="h-full w-full flex items-center justify-center flex-col gap-8">
                    <FaCheckCircle className="w-[90px] h-[90px]" color="#32a852" />
                    <div className="flex flex-col items-center justify-center gap-2">
                        <h1 className="text-4xl font-light">Bem vindo ao <span className="font-bold text-brand-400">GymHub.</span></h1>
                        <p className="text-slate-600 text-md">Sua conta foi criada com sucesso.</p>
                    </div>
                    <div className="flex items-center justify-center gap-4 flex-col">
                        <div className="flex items-center justify-center gap-2">
                            <MdEmail className="text-brand-400 h-5 w-5" />
                            <p className="text-slate-600 font-light">Email de confirmação enviado, verifique a caixa de spam</p>
                        </div>
                        <Button fullWidth variant="gradient">Começar</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}