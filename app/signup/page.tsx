import React from "react"
import SignUpForm from "@/components/auth/signUpForm"
import { GoToTopPageButton } from "@/components/parts/links"
import { Header } from "@/components/parts/header"

// アカウント登録をしてDBにUserを追加する。
export default function SignupPage() {

    return (
        <>
            <Header />
            <main className="flex flex-col items-center justify-center mt-5">
                <div>
                    <h1 className="font-semibold text-2xl">アカウント登録</h1>
                    <SignUpForm/>
                    <br />
                    <GoToTopPageButton/>
                </div>
            </main>
        </>
    )
}