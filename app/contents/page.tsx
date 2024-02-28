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
    const srcType = searchParams.srcType
    console.log("pageNum: " + srcType)

    return (
        <div>
            { typeof srcType === "string" && <ViewVR srcType={srcType}/>}
        </div>
    )
}