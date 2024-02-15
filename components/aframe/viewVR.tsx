"use client"
import React from "react";
import dynamic from "next/dynamic";
import AframeTest from "@/components/aframe/aframeTest"
import PhotoTest from "@/components/aframe/photoTest"
import MovieTest from "@/components/aframe/movieTest"
import { useRouter, usePathname, useSearchParams } from "next/navigation"

// Aframeページを呼び出す
export default function ViewVR() {
    // dynamicで呼び出す必要がある時もある。
    // const MovieTest = dynamic(() => import("@/components/aframe/movieTest"), {
        // ShowContentsNameConsole()
        const PhotoTest = dynamic(() => import("@/components/aframe/photoTest"), {
        // const AframeTest = dynamic(() => import("@/components/map/aframeTest"), {
        loading: () => <p>A content is loading</p>,
        ssr: false,
    })
    
    const pathname = usePathname()
    const searchParams = useSearchParams()

    console.log("pathname= " + pathname)
    console.log("searchParams= " + searchParams)

    return (
        <div>
            {/* <AframeTest /> */}
            <PhotoTest />
            {/* <MovieTest /> */}
        </div>
    )
}