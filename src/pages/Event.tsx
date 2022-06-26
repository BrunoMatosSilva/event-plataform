import { DefaultUi, Player, Youtube } from "@vime/react";
import { Book, CaretRight, InstagramLogo, TelegramLogo, YoutubeLogo } from "phosphor-react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
    const { slug } = useParams<{ slug: string }>()

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                {slug
                    ? <Video lessonSlug={slug} />
                    : <div className="flex-1">
                        <div className="bg-black flex justify-center">
                            <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
                                <Player>
                                    <Youtube videoId="7RoHxSGVAdU" />
                                    <DefaultUi />
                                </Player>
                            </div>
                        </div>

                        <div className="p-8 max-w-[1100px] mx-auto">
                            <div className="flex items-start gap-16">
                                <div className="flex-1">
                                    <h1 className="text-2xl font-bold">
                                        GraphQL: Pra que serve, Conceitos e Hello World - Aula #01
                                    </h1>
                                    <p className="mt-4 text-gray-200 leading-relaxed">
                                        Nesta primeira aula do curso de GraphQL para iniciantes vamos abordar alguns assuntos como: Pra quem serve o GraphQL, como ele funciona e nosso primeiro Hello World!
                                    </p>

                                    <div className="flex items-center gap-4 mt-6">
                                        <img
                                            className="h-16 w-16 rounded-full border-2 border-purple-500"
                                            src="https://github.com/maateusilva.png"
                                            alt=""
                                        />

                                        <div className="leading-relaxed">
                                            <strong className="font-bold text-2xl block">Mateus Silva</strong>
                                            <span className="text-gray-200 text-sm block">Dev Full-stack e Designer há mais de 12 anos</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4">
                                    <a
                                        href="https://t.me/joinchat/H1kzhRsOrLpQR3RmTV9IvQ"
                                        target="blank"
                                        className="p-4 text-sm bg-purple-400 uppercase flex items-center rounded font-bold gap-2 justify-center hover:bg-purple-500 transition-colors" >

                                        <TelegramLogo size={24} />
                                        Comunidade do Telegram
                                    </a>

                                    <a
                                        href="https://www.instagram.com/imateus.silva/"
                                        target="blank"
                                        className="p-4 text-sm text-blue-500 border border-blue-500 uppercase flex items-center rounded font-bold gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors" >

                                        <InstagramLogo size={24} />
                                        Instagram do Professor
                                    </a>
                                </div>
                            </div>

                            <div className="gap-8 mt-20 grid grid-cols-2">
                                <a
                                    href="https://devacademy.com.br/ebooks/react-hooks/"
                                    target="blank"
                                    className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
                                >
                                    <div className="bg-purple-500 h-full p-6 flex items-center">
                                        <Book size={40} />
                                    </div>
                                    <div className="py-6 leading-relaxed">
                                        <strong className="text-2xl">Material Extra</strong>
                                        <p className="text-sm text-gray-200 mt-2">Baixe o e-book e tenha acesso a uma playlist exclusiva no YouTube!</p>
                                    </div>
                                    <div className="h-full p6 flex items-center">
                                        <CaretRight size={24} />
                                    </div>
                                </a>

                                <a
                                    href="https://www.youtube.com/c/MateusSilvaDev"
                                    target="blank"
                                    className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors"
                                >
                                    <div className="bg-purple-500 h-full p-6 flex items-center">
                                        <YoutubeLogo size={40} />
                                    </div>
                                    <div className="py-6 leading-relaxed">
                                        <strong className="text-2xl">Mais Conteúdo</strong>
                                        <p className="text-sm text-gray-200 mt-2">Visite o nosso canal no Youtube que tem muito mais conteúdo para acelerar seu conhecimento.</p>
                                    </div>
                                    <div className="h-full p6 flex items-center">
                                        <CaretRight size={24} />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>


                }
                <Sidebar />
            </main >
        </div >
    )
}