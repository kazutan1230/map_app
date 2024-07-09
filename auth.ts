import NextAuth, { User } from "next-auth"
import Credentials from "next-auth/providers/credentials"
// // password認証はNext.jsでは推奨されていないが、今回は実験的にpasswordで実装するため、
// // passwordハッシュ化手段を用意。
import bcrypt from "bcryptjs"
import { getUser } from "@/components/lib/db"
import { SignInSchema } from "@/components/lib/definitions"

export const { handlers, signIn, signOut, auth } = NextAuth({
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
                        if(tmp) {
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
                    return user
                } catch (error) {
                    return null
                }
            },
        }),
    ],
    callbacks: {
        jwt({ token, user }) {
            if (user) {
                token.id = user.id
            }
            // tokenの有効期限が1ヶ月位で設定方法が不明。
            // if (token.exp) {
            //     const date = new Date(token.exp * 1000)
            //     console.log("date:"+ date)
            // }
            return {
                token,
            }
        },
        session({ session, token }) {
            if (typeof token.id === "string") session.user.id = token.id
            return session
        }
    },
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/signin",
    },
})



