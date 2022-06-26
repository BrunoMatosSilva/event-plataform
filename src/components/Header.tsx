import { List } from "phosphor-react";
import { Logo } from "./Logo";

export function Header() {
    return (
        <div className="w-full bg-black">
            <header className="sm:w-full py-5 flex w-full justify-between px-4 items-center sm:justify-center bg-gray-700">
                <Logo />

                <List size={32} className="sm:hidden cursor-pointer text-blue-500" />
            </header>
        </div>
    )
}