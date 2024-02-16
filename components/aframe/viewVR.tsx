"use client"
import React, { ComponentType } from "react";
import dynamic from "next/dynamic";
import AframeTest from "@/components/aframe/aframeTest"
// import PhotoTest from "@/components/aframe/photoTest"
import MovieTest from "@/components/aframe/movieTest"
// import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { useSearchParams } from "next/navigation"
// import { GetContentName } from "@/components/parts/sendValues";

// Aframeページを呼び出す
export default function ViewVR() {
    // sourceの種類を取得
    const srcType = useSearchParams().get("srcType")
    console.log("contentType=" + srcType)

    // ViewContentに呼び出すcomponentを入れる
    let ViewContent:ComponentType
    
    if (srcType === "img") {
        ViewContent = dynamic(() => import("@/components/aframe/photoTest"), {
            loading: () => <p>A content is loading</p>,
            ssr: false,
        })
    } else if (srcType === "movie") {
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
        ViewContent = dynamic(() => import("@/components/aframe/aframeTest"), {
            loading: () => <p>A content is loading</p>,
            ssr: false,
        })
    }
    // dynamicで呼び出す必要がある時もある。
    
    // ViewContentを呼び出す
    return (
        <div>
            <ViewContent />
        </div>
    )
}