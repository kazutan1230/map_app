// import { NextResponse } from "next/server"
import { UploadFormSchema } from "@/components/lib/definitions"
import { s3Client } from "@/components/lib/s3client"
import { PutObjectCommand } from "@aws-sdk/client-s3"
import { randomUUID, UUID } from "crypto"
import { getLocationID, getSrcTypeID } from "@/components/lib/db"
import prisma from "@/components/lib/prismaClient"

export async function POST(req: Request) {
    const formData = await req.formData()

    const validatedFields = UploadFormSchema.safeParse({
        name: formData.get('name'),
        srcType: formData.get('srcType'),
        lat: formData.get('lat'),
        lng: formData.get('lng'),
    })
    
    // 入力値が非有効な場合、即返す。
    if (!validatedFields.success) {
        return new Response(
            JSON.stringify({ errors: validatedFields.error.flatten().fieldErrors }),
            { status: 400, headers: { "Content-Type": "application/json" } }
        )
    }

    // ファイルのkey=filepathとしてuuid取得
    const uuid = randomUUID () as UUID

    // ファイルをS3へアップロード
    const response: Response = await PostContents(formData, uuid)

    // 200以外の場合、即返す。
    if (response.status !== 200) {
        return response
    }

    if (await getLocationID(validatedFields.data.name) === null) {
        const location = await prisma.location.create({
            name: validatedFields.data.name,
            address: null,
            lat: validatedFields.data.lat,
            lng: validatedFields.data.lng,
        })
    }
        
    if (await getSrcTypeID(validatedFields.data.srcType) === null) {
        const srcType = await prisma.srcType.create({
            type: validatedFields.data.srcType
        })
    }
    
    // 場所が既に登録されているか確認
    const LocationID = await getLocationID(validatedFields.data.name)
    // 登録されたメディアタイプか確認
    const SrcTypeID = await getSrcTypeID(validatedFields.data.srcType)

    if (LocationID !== null && SrcTypeID !== null) {
        const media = await prisma.media.create({
            name: validatedFields.data.name,
            filepath: uuid as string,
            srcTypeId: SrcTypeID,
            locationId: LocationID,
            userId: null,
            updatedAt: new Date(),
        })
    }    

    return new Response(
        JSON.stringify({ uploadResult: response }),
        { status: 200, headers: { "Content-Type": "application/json" } }
    )
}

async function PostContents(body:Readonly<FormData>, uuid: UUID): Promise<Response> {
    const contents: File = body.get('src') as File
    // FileをBufferに変換
    const buffer = Buffer.from(await contents.arrayBuffer())
    console.log("S3_BUCKET: " + process.env.S3_BUCKET)

    // S3へアップロード
    const command = new PutObjectCommand({
        Bucket: process.env.S3_BUCKET as string,
        // Bucket: process.env.S3_BUCKET || TEST_BUCKET,
        Key: uuid,
        ContentType: contents.type,
        Body: buffer,
        ACL: "private",
    })

    const uploadResult = await s3Client.send(command)
    return new Response(
        JSON.stringify({ uploadResult }),
        { status: 200, headers: { "Content-Type": "application/json" } }
    )
}