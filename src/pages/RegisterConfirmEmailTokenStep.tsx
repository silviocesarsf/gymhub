import { Button, PinInput } from "@mantine/core";

export default function RegisterConfirmEmailTokenStep() {
    return (
        <>
            <div className="flex flex-col items-start justify-center mb-4">
                <h1 className="text-xl font-bold">Confirme seu email</h1>
                <p className="text-sm text-slate-500">Caso o código não tenha chego no seu email, verifique sua caixa de spam</p>
            </div>
            <div className="w-full flex items-center justify-center flex-col gap-4">
                <PinInput
                    autoFocus
                    size="xl"
                    length={7}
                />
                <Button variant="subtle" fullWidth>Reenviar Código</Button>
            </div>
        </>
    )
}