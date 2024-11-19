import NextAuth, { User } from "next-auth"
import Credentials from "next-auth/providers/credentials"
// // password認証はNext.jsでは推奨されていないが、今回は実験的にpasswordで実装するため、
// // passwordハッシュ化手段を用意。
import bcrypt from "bcryptjs"
import { getUser } from "@/components/lib/db"
import { SignInSchema } from "@/components/lib/definitions"

export const { handlers, signIn, signOut, auth } = NextAuth({
    // https://authjs.dev/getting-started/deployment#docker
    // でdockerを使う場合、以下に設定せよとのことなので、入れてみる。
    trustHost: true,
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                console.log("credentials", credentials)
                try {
                    let user: User
                    const { email, password } = await SignInSchema.parseAsync(credentials)

                    if (typeof email === "string" && typeof password === "string") {
                        const tmp = await getUser(email)
                        if(tmp !== null && tmp?.pass !== null) {
                            const isMatch = await bcrypt.compare(password, tmp.pass)
                            if (isMatch) {
                                user = {
                                    id: String(tmp.id),
                                    name: tmp.name,
                                    email: tmp.email,
                                }
                            } else {
                                throw new Error("パスワードが間違っています。")
                            }
                        } else {
                            throw new Error("ユーザーが見つかりません。")
                        }
                    } else {
                        throw new Error("メールアドレス又はパスワードが間違っています。")
                    }                    
                    console.log(user)
                    return new Promise((resolve) => setTimeout(() => resolve(user), 1000))
                } catch (error) {
                    return null
                }
            },
        }),
    ],
    callbacks: {
        jwt({ token, user }) {
            if (user) {
                token.sub = user.id
            }
            // tokenを更新してjwtを返す ...に注意。
            return {
                ...token,
            }
        },
        session({ session, token }) {
            if (typeof token.sub === "string") session.user.id = token.sub
            return session
        },
        // 使用できてないmethod
        authorized: async( { request, auth } ) => {
            return !!auth
        },
    },
    session: {
        strategy: "jwt",
        // JWTの有効期限を1日に設定する。
        maxAge: 60 * 60 * 24,
    },
    pages: {
        signIn: "/signin",
    },
})



