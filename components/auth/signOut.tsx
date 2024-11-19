import { signOut } from "next-auth/react"

export function SignOut() {
    return (
        <button
            className="btn btn-primary"
            onClick={() => signOut({ callbackUrl: "/", redirect: true })}
        >
            ログアウト
        </button>
    )
}