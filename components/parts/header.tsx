"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export const Header = () => {
    const [isOpen, setOpen] = useState(false)
    const handleMenuOpen = () => {
        setOpen(!isOpen)
    }

    return (
        <header className="flex h-14 mt-5">
                <Link href="/" className="z-50 inline-block">
                    <Image
                        src="/Logo1.png"
                        alt="Logo1"
                        className="dark:invert"
                        width={70}
                        height={100}
                    />
                </Link>
                <Link href="/" className="z-50 inline-block" >
                    <Image
                        src="/Logo2.png"
                        alt="Logo2"
                        className="dark:invert"
                        width={70}
                        height={100}
                    />
                </Link>
                {/* <nav> */}
            <nav className={
                // isOpen ? "z-40 text-left fixed bg-slate-50 right-0 top-0 w-2/12 h-screen flex flex-col justify-start pt-8 px-3"
                isOpen ? "trasition duration-500 ease-in-out z-40 bg-blue-100 fixed top-0 right-0 bottom-100 left-0 h-1/2 flex flex-col"
                : "fixed right-[-400%] md:right-[0%]"
            }>
                <ul className={
                    isOpen ? "flex h-screen justify-center items-center flex-col gap-6 text-xl" : "block"
                }>
                    <li>
                        <Link href="/" className="inline-block rounded-lg bg-gray-200 md:mx-10 mx-3 px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20 mb-3">Home</Link>
                        <Link href="/login" className="inline-block rounded-lg bg-gray-200 md:mx-10 mx-3 px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20 mb-3">ログイン</Link>
                        <Link href="/register" className="inline-block rounded-lg bg-gray-200 md:mx-10 mx-3 px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20 mb-3">アカウント登録</Link>
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