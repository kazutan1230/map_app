import React from "react"
import ViewVR from "@/components/aframe/viewVR"

// ViewVRを呼び出す
export default async function Contents({
    params,
    searchParams,
}: {
    params: {slug: string}
    searchParams: { [key: string]: string | string[] | undefined }
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