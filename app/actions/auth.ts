"use server"

// password認証はNext.jsでは推奨されていないが、今回はpasswordでも実装するため、
// passwordハッシュ化手段を用意。
// import bcrypt from "bcrypt"
// では駄目だった。
import bcrypt from "bcryptjs"
import { FormState, FormSchema } from "@/components/lib/definitions"
import prisma from "@/components/lib/prismaClient"
import { isRegistered } from "@/components/lib/db"

export async function signUp(state : FormState, formData : FormData) {
    // 入力値の検証
    const validatedFields = FormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password'),
    })

    // 入力値が非有効な場合、即返す。
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }
    console.log(validatedFields.data)

    // databaseに登録する情報の準備
    const { name, email, password } = validatedFields.data
    // passwordハッシュ化
    const pwHash = await bcrypt.hash(password, 10)

    // 既に登録されていないか確認
    const existingUser = await isRegistered(email)
    if (existingUser) {
        return {
            errors: {
                email: ["このメールアドレスは既に使用されています。"],
            },
        }
    }

    try {
        // databaseに登録
        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                pass: pwHash,
            },
        })
        console.log(user)
        return{
            isSuccsess: true,
            message: "アカウントを作成しました。"
        }
    } catch (error) {
        console.log(error)
        return{
            isSuccsess: false,
            message: "アカウントの作成に失敗しました。"
        }
    }
}
