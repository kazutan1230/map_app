import React, { ComponentType } from "react"
import dynamic from "next/dynamic"

type srcTypeProps = {
    srcType: string
    src: string
}

// Aframeページを呼び出す
export default function ViewVR(props: srcTypeProps) {
    // sourceの種類を取得
    const srcType = props.srcType
    const src = props.src

    // ViewContentに呼び出すcomponentを入れる
    let ViewContent:ComponentType<{ src: string }>
    
    if (srcType === "img") {
        // imageファイル
        ViewContent = dynamic(() => import("@/components/aframe/photoTest"), {
            loading: () => <p>A content is loading</p>,
            ssr: false,
        })
    } else if (srcType === "movie") {
        // movieファイル
        ViewContent = dynamic(() => import("@/components/aframe/movieTest"), {
            loading: () => <p>A content is loading</p>,
            ssr: false,
        })
    // urlは未実装
    // } else if (srcType === "url") {
    //     ViewContent = dynamic(() => import("@/components/aframe/urlTest"), {
    //         loading: () => <p>A content is loading</p>,
    //         ssr: false,
    //     })
    } else {
        // aframeのファイル
        ViewContent = dynamic(() => import("@/components/aframe/aframeTest"), {
            loading: () => <p>A content is loading</p>,
            ssr: false,
        })
    }
    // dynamicで呼び出す必要がある時もある。
    
    // ViewContentを呼び出す
    return (
        <div>
           <ViewContent src={src}/>
        </div>
    )
}