"use client"
import { validSignIn } from "@/app/actions/auth"
import { useState,useEffect, useActionState } from "react"
import { useRouter } from "next/navigation"

export function SignInForm() {
    const [state, action] = useActionState(validSignIn, undefined)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    useEffect(() => {
        // 認証が成功した場合、リダイレクト
        if (state?.isSuccsess) {
            router.push("/success_signin")
            router.refresh()
        }
    }, [state, router])

    return (
        <form
            action={action}
        >
            <p>メールアドレス</p>
            <label htmlFor="email" className="input input-bordered flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                <input
                        name="email"
                        type="email"
                        value={email}
                        placeholder="メールアドレス"
                        className="grow"
                        onChange={(e) => setEmail(e.target.value)}
                        required={true}
                />
            </label>
            {state?.errors?.email && <p className="text-red-500">登録したメールアドレスが間違っています。</p>}
            <br />
            <p>パスワード</p>
            <label htmlFor="password" className="input input-bordered flex items-center gap-2">
                <input
                    name="password"
                    type="password"
                    value={password}
                    placeholder="パスワード"
                    className="grow"
                    onChange={(e) => setPassword(e.target.value)}
                    required={true} />
            </label>
            <br />
            <button type="submit" className="btn btn-primary mt-5">ログイン</button>
            {state?.message && <p className="text-red-500">{state.message}</p>}
        </form>
    )
}