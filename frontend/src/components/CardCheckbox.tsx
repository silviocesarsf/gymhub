import { Checkbox, Group } from "@mantine/core";
import { useState } from "react";

interface CardCheckboxProps {
    title: string,
    description?: string,
    isChecked?: boolean,
    emoticon?: string
}
export default function CardCheckbox({ title, description, isChecked = false, emoticon }: CardCheckboxProps) {
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
                <div className="flex items-center justify-between w-full">
                    <div>
                        <h1>{title}</h1>
                        <p className="text-xs text-slate-500">
                            {description}
                        </p>
                    </div>
                    {
                        emoticon && (
                            <p className="text-2xl">{emoticon}</p>
                        )
                    }
                </div>
            </Group>
        </Checkbox.Card>
    )
}