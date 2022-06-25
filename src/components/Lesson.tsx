import { CheckCircle, Lock } from 'phosphor-react';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'

interface LessonProps {
    title: string;
    slug: string;
    availableAt: Date;
    type: 'live' | 'class';
}

export function Lesson(props: LessonProps) {
    const isLessonAvailable = isPast(props.availableAt);
    const availableAtDateFormatted = format(props.availableAt, "EEEE' • 'd' de ' MMMM' • 'k'h'mm", {
        locale: ptBR,
    })

    return (
        <a href={props.slug}>
            <span className="text-gray-300">
                {availableAtDateFormatted}
            </span>

            <div className="rounded border border-gray-500 p-4 mt-2 hover:border-purple-500 transition-colors">
                <header className="flex item-center justify-between">

                    {isLessonAvailable ? (
                        <span className="text-sm text-purple-500 font-medium flex items-center gap-2 ">
                            <CheckCircle size={20} />
                            Conteúdo liberado
                        </span>
                    ) : (
                        <span className="text-sm text-orange-500 font-medium flex items-center gap-2">
                            <Lock size={20} />
                            Em breve
                        </span>
                    )}

                    <span className="text-xs rounded py-[0.125rem] px-2 text-white border border-purple-400 font-bold">
                        {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
                    </span>
                </header>
                <strong className="text-gray-200 mt-5 block">
                    {props.title}
                </strong>
            </div>
        </a>
    )
}