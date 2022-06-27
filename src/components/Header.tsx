import { List, X } from "phosphor-react";
import { Popover } from '@headlessui/react'
import { Logo } from "./Logo";
import { Lesson } from "./Lesson";
import { useGetLessonsQuery } from "../graphql/generated";
import { useState } from "react";

export function Header() {
    const { data } = useGetLessonsQuery()
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <div className="w-full bg-black">
            <Popover>
                <header className="sm:w-full py-5 flex w-full justify-between px-4 items-center sm:justify-center bg-gray-700">
                    <Logo />

                    <Popover.Button className="flex items-center ml-2 sm:hidden" >
                        Aulas {!modalOpen ? <List size={32} className="sm:hidden cursor-pointer text-blue-500" aria-hidden="true" onClick={() => setModalOpen(true)} />
                            : <X size={32} className="sm:hidden cursor-pointer text-blue-500" onClick={() => setModalOpen(false)} />}
                    </Popover.Button>
                </header>

                <Popover.Panel className="z-[999] absolute bg-gray-900 h-[150vh]">
                    <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block ml-2">
                        Cronograma de aulas
                    </span>
                    <div className="flex flex-col gap-8 m-2">
                        {data?.lessons.map(lesson => {
                            return (
                                <Lesson
                                    key={lesson.id}
                                    title={lesson.title}
                                    slug={lesson.slug}
                                    availableAt={new Date(lesson.availableAt)}
                                    type={lesson.lessonType}
                                />
                            )
                        })}
                    </div>
                </Popover.Panel>
            </Popover>
        </div>
    )
}
