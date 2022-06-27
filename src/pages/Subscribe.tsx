import { useState, FormEvent, InvalidEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import imgUrl from '../../src/assets/code-mockup.png'
import { useCreateSubscriberMutation } from "../graphql/generated";

export function Subscribe() {
    const navigate = useNavigate()

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [createSubscriber, { loading }] = useCreateSubscriberMutation()

    function handleNewCommentInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Campo obrigatorio, preencha corretamente!')
    }

    async function handleSubscribe(event: FormEvent) {
        event.preventDefault();

        await createSubscriber({
            variables: {
                name,
                email,
            }
        })

        navigate('/event')
    }

    return (
        <div className="bg-blur bg-cover bg-no-repeat sm:min-h-screen flex flex-col sm:items-center">
            <div className="sm:w-full sm:max-w-[1100px] flex items-center justify-center flex-col sm:flex-row sm:justify-between mt-20 mx-auto">
                <div className="w-full p-2 sm:max-w-[640px]">
                    <Logo />

                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Construa uma aplicação com <strong className="text-blue-500">Back-end completo </strong>do zero, com <strong className="text-blue-500"> React e NodeJS</strong>
                    </h1>
                    <p className="mt-4 text-gray-200 leading-relaxed">
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>

                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>

                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full">
                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="text"
                            placeholder="Seu nome completo"
                            onInvalid={handleNewCommentInvalid}
                            onChange={event => setName(event.target.value)}
                            required
                        />
                        <input
                            className="bg-gray-900 rounded px-5 h-14"
                            type="email"
                            placeholder="Digite seu e-mail"
                            onInvalid={handleNewCommentInvalid}
                            onChange={event => setEmail(event.target.value)}
                            required
                        />

                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-4 bg-purple-500 uppercase py-4 rounded font-bold text-sm hover:bg-purple-400 transition-colors disabled:opacity-50"
                        >
                            Garantir minha vaga
                        </button>
                    </form>
                </div>
            </div>

            <img src={imgUrl} className="mt-10" alt="" />
        </div>
    );
}
