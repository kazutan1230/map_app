import React from "react"
import { UploadForm } from "@/components/upload/uploadForm"
import { GoToTopPageButton } from "@/components/parts/links"

// メディア情報を入力しファイルアップロードをする。
export default function SignupPage() {

    return (
        <>
            <main className="flex flex-col items-center justify-center mt-5">
                <div>
                    <h1 className="font-semibold text-2xl">コンテンツアップロード</h1>
                    <UploadForm/>
                    <br />
                    <GoToTopPageButton/>
                </div>
            </main>
        </>
    )
}