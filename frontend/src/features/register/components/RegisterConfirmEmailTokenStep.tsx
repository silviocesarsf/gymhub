import { Button, PinInput } from "@mantine/core";

export default function RegisterConfirmEmailTokenStep() {
    return (
        <>
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