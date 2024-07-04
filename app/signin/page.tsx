import React from "react"
import { SignInForm } from "@/components/auth/signInForm"
import { GoToTopPageButton } from "@/components/parts/links"
import { Header } from "@/components/parts/header"

// emailとpasswordを入力させログインする。
// export default function SigninPage() {
  
 export default function SignInPage() {
    return (
        <>
            <Header />
            <main className="flex flex-col items-center justify-center mt-5">
                <div>
                    <h1 className="font-semibold text-2xl">ログイン</h1>
                    <SignInForm/>
                    <br />
                    <GoToTopPageButton/>
                </div>
            </main>
        </>
    )
}