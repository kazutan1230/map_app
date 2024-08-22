import { z, ZodObject } from "zod"

const IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "movie/mp4"]
const IMAGE_SIZE_LIMIT = 5 * 1024 * 1024

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

export const emailSchema = z.object({
    email: z.string().email("メールアドレスを入力してください").trim(),
})


// coodsをzodで取れないので、取り敢えずほっとく。
export const UploadFormSchema = z.object({
    // formDataがstring型で渡されるので、zodで数値として取得できるようにする。
    lat: z
        .preprocess((value) => {
            if (typeof value !== "string") {
                return Number(value)
            }
        if (value.trim() === "") {
            return NaN
        }
        return Number(value)
    }, z
        .number()
        .gte(-90, "-90度以上を入力してください")
        .lte(90, "90度以下を入力してください")),
    lng: z
        .preprocess((value) => {
            if (typeof value !== "string") {
                return Number(value)
            }
        if (value.trim() === "") {
            return NaN
        }
        return Number(value)
    }, z
        .number()
        .gt(-180, "-180度より大きい数値を入力してください")
        .lte(180, "180度以下を入力してください")),
    name: z
        .string()
        .min(1, "1文字以上入力してください")
        .trim(),
    srcType: z.string().trim(),
})

export type UploadFormState =
    | {
        errors?: {
            name?: string[]
            email?: string[]
            password?: string[]
        }
        message?: string
    }
    | undefined

// 動画MP4も対応できるようにすること。ファイルサイズとか
export const srcSchema = z.object({
    images: z
        .custom<FileList>()
        .refine((files) => {
            if (files.length === 0) {
                messege: "ファイルを選択してください"
                return true
            }
            if (files.length > 0) {
                message: "複数のファイルを選択できません。"
                return false
            }
        })
        .refine(
            (files) =>
                Array.from(files).every((file) => file.size < IMAGE_SIZE_LIMIT),
                {message: "5MB以下のファイルを選択してください"},
        )
        .refine(
            (files) =>
                Array.from(files).every((file) => IMAGE_TYPES.includes(file.type)),
                {message: "添付できる画像ファイルはJPGまたはPNG形式です。"},
        )
})