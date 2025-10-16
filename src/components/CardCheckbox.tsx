import { Checkbox, Group } from "@mantine/core";
import { useState } from "react";

interface CardCheckboxProps {
    title: string,
    description: string,
    isChecked?: boolean
}
export default function CardCheckbox({ title, description, isChecked = false }: CardCheckboxProps) {
    const [checked, setChecked] = useState<boolean>(isChecked);
    return (
        <Checkbox.Card
            className="transition-colors hover:bg-brand-200/20"
            style={{
                padding: "1rem"
            }}
            radius="md"
            checked={checked}
            onClick={() => setChecked((c) => !c)}
        >
            <Group wrap="nowrap" align="center">
                <Checkbox.Indicator />
                <div>
                    <h1>{title}</h1>
                    <p className="text-xs text-slate-500">
                        {description}
                    </p>
                </div>
            </Group>
        </Checkbox.Card>
    )
}