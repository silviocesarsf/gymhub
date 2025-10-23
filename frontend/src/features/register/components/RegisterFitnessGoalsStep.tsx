import { ScrollArea } from "@mantine/core";
import CardCheckbox from "../../../components/CardCheckbox";

export default function RegisterFitnessGoalsStep() {
    return (
        <>
            <ScrollArea h={350}>
                <div className="flex items-center justify-center flex-col w-full gap-2">
                    <CardCheckbox title="Perder peso" description="Queime gordura e alcance um peso mais saudável" />
                    <CardCheckbox title="Construir músculo" description="Aumentar a massa muscular e a força" />
                    <CardCheckbox title="Melhorar a resistência" description="Aumente a aptidão cardiovascular e a resistência" />
                    <CardCheckbox title="Manter-se saudável" description="Manter a saúde e o bem-estar geral" />
                    <CardCheckbox title="Aumentar a flexibilidade" description="Melhore a mobilidade e a amplitude de movimento" />
                </div>
            </ScrollArea>
        </>
    )
}