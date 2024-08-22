"use server"
import { UploadFormSchema, UploadFormState, srcSchema } from "@/components/lib/definitions"

export async function upload(state : UploadFormState, formData : FormData) {
    console.log(formData)
    const validatedFields = UploadFormSchema.safeParse({
        coods: [formData.get('coods[0]'), formData.get('coods[1]')],
        name: formData.get('name'),
    })

    // 入力値が非有効な場合、即返す。
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }
    console.log(validatedFields.data)
    
    const validatedFiles = srcSchema.safeParse({
        src: formData.get('src'),
    })

    if (!validatedFiles.success) {
        return {
            errors: validatedFiles.error.flatten().fieldErrors,
        }
    }
}