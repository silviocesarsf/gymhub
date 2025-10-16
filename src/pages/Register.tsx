import { Button, Container, Paper, Progress } from "@mantine/core";
import { useState, type ReactElement } from "react";
import RegisterBasicInfoStep from "./RegisterBasicInfoStep";
import RegisterPersonalDetailsStep from "./RegisterPersonalDetailsStep";
import RegisterFitnessGoalsStep from "./RegisterFitnessGoalsStep";
import RegisterExercisesPreferences from "./RegisterExercisesPreferences";

export default function Register() {
    const [progress, setProgress] = useState(25);
    const [stepActive, setStepActive] = useState(1);

    const progressStepMap: Record<number, number> = {
        1: 25,
        2: 50,
        3: 75,
        4: 100
    };

    const stepsComponentsMap: Record<number, ReactElement> = {
        1: <RegisterBasicInfoStep />,
        2: <RegisterPersonalDetailsStep />,
        3: <RegisterFitnessGoalsStep />,
        4: <RegisterExercisesPreferences />
    }

    const nextStep = () => setStepActive((current: number) => {
        const currentStep: number = (current < 4 ? current + 1 : current);
        setProgress(progressStepMap[currentStep]);
        renderStep(currentStep);
        return currentStep;
    });

    const prevStep = () => setStepActive((current) => {
        const currentStep = (current > 0 ? current - 1 : current);
        setProgress(progressStepMap[currentStep]);
        renderStep(currentStep);
        return currentStep;
    });

    const renderStep = (currentStep: number) => {
        return stepsComponentsMap[currentStep];
    };

    return (
        <div className="w-full min-h-screen flex items-center justify-center flex-col gap-8">
            <Container>
                <div className="w-full h-full flex items-start justify-center flex-col gap-8">
                    <div className="flex flex-col center gap-4">
                        <h1 className="text-3xl font-semibold">Bem vindo</h1>
                        <p className="text-md text-slate-500">Crie sua conta e comece sua jornada para uma vida mais saudável</p>
                    </div>
                </div>
                <Paper
                    className="w-full mt-8 flex flex-col items-center justify-center"
                >
                    <div className="flex w-full items-center justify-center gap-4 flex-col">
                        <div className="flex w-full items-center justify-between">
                            <p className="text-slate-400">Passo {stepActive} de 4</p>
                            <h1 className="font-semibold text-slate-400">Informações básicas</h1>
                        </div>
                        <Progress className="w-full" value={progress} size={"sm"} />
                    </div>
                    <form className="w-full mt-12 flex flex-col gap-4">
                        {renderStep(stepActive)}
                    </form>
                    <div className="w-full h-[1px] bg-slate-300 my-8"></div>
                    <div className="w-full flex items-center justify-between">
                        {stepActive > 1 && (
                            <div className="w-full">
                                <Button onClick={prevStep} variant="outline">Voltar</Button>
                            </div>
                        )}
                        <div className="w-full flex items-center justify-end">
                            <Button onClick={nextStep} variant="gradient">Próximo</Button>
                        </div>
                    </div>
                </Paper>
            </Container>
        </div>
    )
}