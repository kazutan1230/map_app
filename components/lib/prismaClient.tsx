import { PrismaClient } from "@prisma/client"
import type { Location } from "@/interfaces/db"
import { PrismaNeon } from "@prisma/adapter-neon"
import { Pool } from "@neondatabase/serverless"

// PrismaClientを拡張するための関数を作成
const prismaClientSingleton = () => {
    // edgeランタイムを使用するためにNeon Adapterを入れてみる。
    const neon = new Pool({ connectionString: process.env.POSTGRES_PRISMA_URL })
    const adapter = new PrismaNeon(neon)

    return new PrismaClient({ adapter }).$extends({
        model: {
            location: {
                async create(data: {
                    name: string
                    address: string | null
                    lat: number
                    lng: number
                    // media: string[] | null
                }) {
                    // Locationオブジェクトを作成
                    const location: Location = {
                        name: data.name,
                        address: data.address,
                        position: {
                            latitude: data.lat,
                            longitude: data.lng
                        }
                        // media: data.media
                    }

                    // データベースにオブジェクトを挿入
                    const point = `POINT(${location.position.longitude} ${location.position.latitude})`
                    await prisma.$queryRaw`
                        INSERT INTO "Location" (name, address, position) 
                        VALUES (${location.name}, ${location.address}, ST_GeomFromText(${point}, 4326))
                    `

                    // 作成したオブジェクトを返す
                    return location
                }
            },
            srcType: {
                async create(data: {
                    type: string
                }) {
                    const srcType = data.type
                    await prisma.$queryRaw`
                        INSERT INTO "SrcType" (type) 
                        VALUES (${srcType})
                    `
                    return srcType
                }
            },
            media: {
                async create(data: {
                    name: string
                    filepath: string
                    locationId: number
                    srcTypeId: number
                    userId: string | null
                    updatedAt: Date
                }) {
                    const media = data
                    // ゆくゆくはUserのIDを入れる。
                    await prisma.$queryRaw`
                        INSERT INTO "Media" (name, filepath, "locationId", "srcTypeId", "userId", "updatedAt") 
                        VALUES (${media.name}, ${media.filepath}, ${media.locationId}, ${media.srcTypeId}, ${media.userId}, ${media.updatedAt})
                    `
                    return media
                }
            }
        }
    })
}

// グローバルに拡張されたPrismaClientを管理
declare global {
    var prismaGlobal: undefined | ReturnType<typeof prismaClientSingleton>
}

// 拡張されたPrismaClientのインスタンスを作成
const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma