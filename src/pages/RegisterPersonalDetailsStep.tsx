import { Input, Select } from "@mantine/core";

export default function RegisterPersonalDetailsStep() {
    return (
        <>
            <div className="flex items-center justify-between w-full gap-4">
                <Input.Wrapper className="w-full" label="Idade">
                    <Input type="number" placeholder="18" />
                </Input.Wrapper>
                <Input.Wrapper className="w-full" label="Gênero">
                    <Select placeholder="Homem" data={["Homem", "Mulher", "Outro", "Prefiro não dizer"]} />
                </Input.Wrapper>
            </div>
            <div className="flex items-center justify-between w-full gap-4">
                <Input.Wrapper className="w-full" label="Altura (cm)">
                    <Input type="number" placeholder="191" />
                </Input.Wrapper>
                <Input.Wrapper className="w-full" label="Peso (Kg)">
                    <Input type="number" placeholder="90" />
                </Input.Wrapper>
            </div>
            <Input.Wrapper label="Nível de atividade física atual">
                <Select
                    placeholder="Sedentário"
                    data={[
                        "Sedentário",
                        "Levemente ativo (1-2 dias na semana)",
                        "Moderadamente ativo (2-3 dias na semana)",
                        "Muito ativo (4-7 dias na semana)"
                    ]}
                />
            </Input.Wrapper>
        </>
    )
}