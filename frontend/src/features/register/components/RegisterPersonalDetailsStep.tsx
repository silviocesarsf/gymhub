import { Input, Select } from "@mantine/core";
import { Controller, useFormContext } from "react-hook-form";
export default function RegisterPersonalDetailsStep() {
    const { register, control, formState: { errors } } = useFormContext();
    return (
        <>
            <div className="flex items-center justify-between w-full gap-4">
                <Input.Wrapper
                    error={errors.age ? String(errors.age.message) : undefined}
                    className="w-full"
                    label="Idade">
                    <Input {...register("age")} type="number" placeholder="18" />
                </Input.Wrapper>
                <Input.Wrapper className="w-full" label="Gênero">
                    <Controller
                        name="gender"
                        control={control}
                        render={({ field, fieldState }) => (
                            <Select
                                {...field}
                                placeholder="Selecione..."
                                data={["Homem", "Mulher", "Prefiro não dizer"]}
                                error={fieldState.error?.message}
                            />
                        )}
                    />
                </Input.Wrapper>
            </div>
            <div className="flex items-center justify-between w-full gap-4">
                <Input.Wrapper
                    error={errors.height ? String(errors.height.message) : undefined}
                    className="w-full"
                    label="Altura">
                    <Controller
                        name="height"
                        control={control}
                        defaultValue={null}
                        render={({ field }) => (
                            <Input
                                value={field.value}
                                placeholder="Ex: 1,74"
                            />
                        )}
                    />
                </Input.Wrapper>
                <Input.Wrapper
                    error={errors.weight ? String(errors.weight.message) : undefined}
                    className="w-full"
                    label="Peso">
                    <Input {...register("weight")} type="number" placeholder="Ex: 90kg" />
                </Input.Wrapper>
            </div>
            <Input.Wrapper label="Nível de atividade física atual">
                <Controller
                    name="activity_level"
                    control={control}
                    render={({ field, fieldState }) => (
                        <Select
                            {...field}
                            placeholder="Sedentário"
                            data={[
                                { value: "Sedentário", label: "Sedentário" },
                                { value: "Levemente ativo", label: "Levemente ativo (1-2 dias na semana)" },
                                { value: "Moderadamente ativo", label: "Moderadamente ativo (2-3 dias na semana)" },
                                { value: "Muito ativo", label: "Muito ativo (4-7 dias na semana)" },
                            ]}
                            error={fieldState.error?.message}
                        />
                    )}
                />
            </Input.Wrapper>
        </>
    )
}