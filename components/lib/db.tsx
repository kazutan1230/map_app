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

// 既に登録されているいるlocationか確認してidを返す。登録されていなければnullを返す。
export const getLocationID = async (name: string, ) => {
    try {
        const location = await prisma.location.findFirst({
            where: {
                name: name
            }
        })
        if (location) {
            return location.id
        } else {
            return null
        }
    } catch {
        return null
    }
}

export const getSrcTypeID = async (type: string, ) => {
    try {
        const srcType = await prisma.srcType.findFirst({
            where: {
                type: type
            }
        })
        if (srcType) {
            return srcType.id
        } else {
            return null
        }
    } catch {
        return null
    }
}
