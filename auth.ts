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
                try {
                    let user: User
                    let pwHash = null

                    const { email, password } = await SignInSchema.parseAsync(credentials)

                                        if (typeof email === "string") {
                        const tmp = await getUser(email)
                        if (tmp) {
                            user = {
                                id: String(tmp.id),
                                name: tmp.name,
                                email: tmp.email,
                            }
                            if (typeof password === "string") {
                                pwHash = await bcrypt.hash(password, 10)
                            } else {
                                throw new Error("パスワードが間違っています。")
                            }
                                } else {
                            throw new Error("ユーザーが見つかりません。")
                        }
                    } else {
                        throw new Error("メールアドレスが間違っています。")
                    }                    
                    return user
                } catch (error) {
                    console.log(error)
                    return null
                }
            },
        }),
    ],
})



