import { z } from "zod"

export const FormSchema = z.object({
    name: z
        .string()
        .min(2, "2文字以上入力してください")
        .trim(),
    email: z.string().email("メールアドレスを入力してください").trim(),
    password: z
        .string()
        .min(8, "8文字以上入力してください")
        .regex(/[a-zA-Z]/, "半角英字を入力してください")
        .regex(/[0-9]/, "半角数字を入力してください")
        .trim(),
    })

export type FormState =
    | {
        errors?: {
            name?: string[]
            email?: string[]
            password?: string[]
        }
        message?: string
    }
    | undefined

export const SignInSchema = z.object({
    email: z.string().email("メールアドレスを入力してください").trim(),
    password: z
        .string()
        .min(8, "8文字以上入力してください")
        .regex(/[a-zA-Z]/, "半角英字を入力してください")
        .regex(/[0-9]/, "半角数字を入力してください")
        .trim(),
})