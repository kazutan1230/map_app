import React from "react"
import ViewVR from "@/components/aframe/viewVR"

type ContentsParams = Promise<{
    srcType: string
    src: string
}>
// { [key: string]: string | string[] | undefined }
// ViewVRを呼び出す
export default async function Contents({
    searchParams,
}: {
    searchParams: ContentsParams
}) {
    const {srcType, src} = await searchParams
    console.log("srcType: " + srcType)
    console.log("src: " + src)

    return (
        <div>
            { typeof srcType === "string" && typeof src === "string" && <ViewVR srcType={srcType} src={src}/>}
        </div>
    )
}