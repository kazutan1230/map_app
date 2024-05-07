"use client"
import { useFormState, useFormStatus } from "react-dom"
import { signUp } from "@/app/actions/auth"
import { useState } from "react"

async function onSubmit() {
    console.log("onSubmit")
}

export function SignupButton() {
    const { pending } = useFormStatus()
    return (
        <button
            type="submit"
            className="btn btn-primary"
            onClick={() => {onSubmit}}
            disabled={pending}
        >
            {pending ? "送信中..." : "アカウント登録"}
        </button>
    )
}

export default function SignupForm () {
    const [state, action] = useFormState(signUp, undefined)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <form action={action} className="mt-5 justify-items-center">
            <p>ユーザー名</p>
            <label htmlFor="username" className="input input-bordered flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
            <input
                name="name"
                type="text"
                placeholder="ユーザー名"
                className="grow"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={true}
            />
            </label>
            {state?.errors?.name && <p className="text-red-500">{state.errors.name}</p>}
            <br />
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
            {state?.errors?.email && <p className="text-red-500">{state.errors.email}</p>}
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
            {state?.errors?.password && (
                <>
                    <p className="text-red-500">パスワードは:</p>
                    <ul>
                        {state.errors.password.map((error) => (
                            <li className="text-red-500" key={error}>- {error}</li>
                        ))}
                    </ul>
                </>
            )}
            <br />
            {state?.isSuccsess !== true && <SignupButton/>}
            {state?.message && <p className="text-blue-500">{state.message}</p>}
        </form>
    )
}
