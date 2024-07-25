"use client"
import React from "react"
import { GoToTopPageButton } from "@/components/parts/links"
import { useRouter } from "next/navigation"


export default function SuccessPage() {
    const router = useRouter()
    setTimeout(() => {
        router.push("/")
    }, 3000)
    return (
        <>
            <main className="flex flex-col items-center justify-center mt-5">
                <div>
                    <h1 className="font-semibold text-2xl">ログイン完了</h1>
                    <p>ログインに成功しました。</p>
                    <p>3秒後にトップページに戻ります。</p>
                    <p>切り替わらない場合は、下のボタンをクリックしてください。</p>
                    <br />
                    <GoToTopPageButton/>
                </div>
            </main>
        </>
    )
}