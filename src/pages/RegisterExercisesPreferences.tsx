import { ScrollArea } from "@mantine/core"
import CardCheckbox from "../components/CardCheckbox"

export default function RegisterExercisesPreferences() {
    return (
        <>
            <div className="flex flex-col items-start justify-center mb-4">
                <h1 className="text-xl font-bold">Preferências de exercícios</h1>
                <p className="text-sm text-slate-500">Quais tipos de exercícios você mais gosta?</p>
            </div>
            <ScrollArea h={350}>
                <div className="space-y-6">
                    {/* Força e Condicionamento */}
                    <div>
                        <h2 className="mb-2 text-slate-600 font-medium">🏋️ Força e Condicionamento</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <CardCheckbox title="Treino de força" emoticon="🏋️‍♂️" />
                            <CardCheckbox title="Musculação" emoticon="💪" />
                            <CardCheckbox title="CrossFit" emoticon="🧱" />
                            <CardCheckbox title="Funcional" emoticon="⚡" />
                            <CardCheckbox title="HIIT" emoticon="⏱️" />
                            <CardCheckbox title="Calistenia" emoticon="🤸‍♂️" />
                        </div>
                    </div>

                    {/* Esportes */}
                    <div>
                        <h2 className="mb-2 text-slate-600 font-medium">⚽ Esportes</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <CardCheckbox title="Futebol" emoticon="⚽" />
                            <CardCheckbox title="Basquete" emoticon="🏀" />
                            <CardCheckbox title="Vôlei" emoticon="🏐" />
                            <CardCheckbox title="Handebol" emoticon="🤾‍♂️" />
                            <CardCheckbox title="Beisebol" emoticon="⚾" />
                        </div>
                    </div>

                    {/* Lutas */}
                    <div>
                        <h2 className="mb-2 text-slate-600 font-medium">🥋 Lutas</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <CardCheckbox title="Boxe" emoticon="🥊" />
                            <CardCheckbox title="Jiu-jitsu" emoticon="🥋" />
                            <CardCheckbox title="Muay Thai" emoticon="🦵" />
                            <CardCheckbox title="MMA" emoticon="💥" />
                        </div>
                    </div>

                    {/* Outdoor */}
                    <div>
                        <h2 className="mb-2 text-slate-600 font-medium">🌲 Outdoor</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <CardCheckbox title="Caminhada" emoticon="🚶‍♂️" />
                            <CardCheckbox title="Ciclismo" emoticon="🚴‍♀️" />
                            <CardCheckbox title="Natação" emoticon="🏊‍♂️" />
                            <CardCheckbox title="Trilhas" emoticon="⛰️" />
                            <CardCheckbox title="Escalada" emoticon="🧗‍♂️" />
                            <CardCheckbox title="Surf" emoticon="🏄‍♂️" />
                        </div>
                    </div>

                    {/* Bem-estar */}
                    <div>
                        <h2 className="mb-2 text-slate-600 font-medium">🧘 Bem-estar</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <CardCheckbox title="Pilates" emoticon="🧘‍♀️" />
                            <CardCheckbox title="Yoga" emoticon="🧘‍♂️" />
                            <CardCheckbox title="Meditação" emoticon="🕉️" />
                            <CardCheckbox title="Alongamento" emoticon="🧎‍♂️" />
                        </div>
                    </div>
                </div>
            </ScrollArea>
        </>
    )
}
