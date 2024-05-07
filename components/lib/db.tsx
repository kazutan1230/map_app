import prisma from "@/components/lib/prismaClient"
// DB関連の関数群

// 既に登録されているか確認
export const isRegistered = async (email: string) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        if (user) {
            return true
        } else {
            return false
        }        
    } catch {
        return null
    }
}

// UserをDBから取得
export const getUser = async (email: string) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        return user
    } catch {
        return null
    }
}