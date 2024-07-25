"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { SignOut } from "@/components/auth/signOut"
import { Session } from "next-auth"

type HeaderProps = {
    session: Session | null
}

export const Header: React.FC<HeaderProps> = ({session}) => {
    const [isOpen, setOpen] = useState(false)
    const handleMenuOpen = () => {
        setOpen(!isOpen)
    }

    return (
        <header className="flex h-14">
                <Link href="/" className="inline-block">
                    <Image
                        src="/Logo1.png"
                        alt="Logo1"
                        className="dark:invert"
                        width={70}
                        height={100}
                    />
                </Link>
                <Link href="/" className="inline-block" >
                    <Image
                        src="/Logo2.png"
                        alt="Logo2"
                        className="dark:invert"
                        width={70}
                        height={100}
                    />
                </Link>
            <nav className={
                isOpen ? "z-50 trasition duration-500 ease-in-out bg-blue-100 fixed top-0 right-0 bottom-100 left-0 h-1/2 flex flex-col"
                : "fixed right-[-400%] md:right-[0%] md:z-50"
            }>
                <ul className={
                    isOpen ? "flex h-screen justify-center items-center flex-col gap-6 text-xl" : "block"
                }>
                    <li>
                        <Link href="/" className="btn btn-primary mt-5 mx-3">Home</Link>
                        { !session ?
                            <>
                                <Link href="/signin" className="btn btn-primary mx-3">ログイン</Link>
                                <Link href="/signup" className="btn btn-primary mx-3">アカウント登録</Link>
                            </> :
                            <SignOut/>
                        }
                    </li>
                </ul>
            </nav>
            {/* メニューボタン */}
            <button className="fixed right-[5%] z-50 space-y-2 md:hidden" onClick={handleMenuOpen}>
                <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    {isOpen ? <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                    : <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h14"/> }
                </svg>
            </button>
        </header>
    )
}