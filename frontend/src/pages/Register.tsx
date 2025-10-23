import { Button, Paper, Progress } from "@mantine/core";
import { useEffect, useState, type ReactElement } from "react";
import RegisterBasicInfoStep from "../features/register/components/RegisterBasicInfoStep";
import RegisterPersonalDetailsStep from "../features/register/components/RegisterPersonalDetailsStep";
import RegisterFitnessGoalsStep from "../features/register/components/RegisterFitnessGoalsStep";
import RegisterExercisesPreferences from "../features/register/components/RegisterExercisesPreferences";
import { basicInfoSchema } from "../features/register/schemas/basicInfoSchema";
import { FormProvider, useForm, type FieldValues } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod";
import type { ZodObject } from "zod";
import { personalDetailsSchema } from "../features/register/schemas/personalDetailsSchema";

export default function Register() {
    const [progress, setProgress] = useState(25);
    const [stepActive, setStepActive] = useState(2);
    const [stepTitle, setStepTitle] = useState("Informações básicas");

    const progressStepMap: Record<number, number> = {
        1: 25,
        2: 50,
        3: 75,
        4: 100
    };

    interface StepMapInterface {
        component: ReactElement,
        title: string
    }

    const stepsComponentsMap: Record<number, StepMapInterface> = {
        1: {
            component: <RegisterBasicInfoStep />,
            title: "Informações básicas"
        },
        2: {
            component: <RegisterPersonalDetailsStep />,
            title: "Detalhes pessoais"
        },
        3: {
            component: <RegisterExercisesPreferences />,
            title: "Exercícios favoritos"
        },
        4: {
            component: <RegisterFitnessGoalsStep />,
            title: "Metas a alcançar"
        },
        5: {
            component: <RegisterExercisesPreferences />,
            title: "Preferências de exercícios"
        }
    }

    const nextStep = () => setStepActive((current: number) => {
        const currentStep: number = (current < 4 ? current + 1 : current);
        setProgress(progressStepMap[currentStep]);
        return currentStep;
    });

    const prevStep = () => setStepActive((current) => {
        const currentStep = (current > 0 ? current - 1 : current);
        setProgress(progressStepMap[currentStep]);
        return currentStep;
    });

    const stepSchemas: Record<number, ZodObject> = {
        1: basicInfoSchema,
        2: personalDetailsSchema,
        3: basicInfoSchema,
        4: basicInfoSchema,
        5: basicInfoSchema,
    }

    const currentSchema = stepSchemas[stepActive];
    const methods = useForm<FieldValues>({
        resolver: zodResolver(currentSchema),
        mode: "onBlur"
    })

    useEffect(() => {
        const step = stepsComponentsMap[stepActive];
        setStepTitle(step.title);
    }, [stepActive]);

    const lastStep = stepActive == 4;
    return (
        <div className="w-full min-h-screen h-full flex items-center justify-center flex-col">
            <div className="w-[40%] h-[50%] flex flex-col gap-4">
                <div className="w-full h-full flex items-start justify-center flex-col gap-8">
                    <div className="flex flex-col center">
                        <h1 className="text-3xl font-semibold">Bem vindo</h1>
                        <p className="text-md text-slate-500">Crie sua conta e comece sua jornada para uma vida mais saudável</p>
                    </div>
                </div>
                <Paper
                    className="w-full flex flex-col items-center justify-center h-full"
                >
                    <div className="flex w-full items-center justify-center gap-4 flex-col  my-4">
                        <div className="flex w-full items-center justify-between">
                            <p className="text-slate-400">Passo {stepActive} de 4</p>
                            <h1 className="font-semibold text-slate-400">{stepTitle}</h1>
                        </div>
                        <Progress className="w-full" value={progress} size={"sm"} />
                    </div>
                    <FormProvider {...methods}>
                        <form onSubmit={methods.handleSubmit((data) => {
                            if (!lastStep) {
                                nextStep()
                            }
                            console.log("Dados finais:", data);
                        })} className="w-full flex flex-col gap-4">
                            {stepsComponentsMap[stepActive].component}
                            <div className="w-full h-[.4px] bg-slate-300 my-8"></div>
                            <div className="w-full flex items-center justify-between">
                                {stepActive > 1 && (
                                    <div className="w-full">
                                        <Button onClick={prevStep} variant="outline">Voltar</Button>
                                    </div>
                                )}
                                <div className="w-full flex items-center justify-end">
                                    <Button type="submit">{lastStep ? "Finalizar" : "Próximo"}</Button>
                                </div>
                            </div>
                        </form>
                    </FormProvider>
                </Paper>
            </div>
        </div>
    )
}