import React from "react";

import dynamic from "next/dynamic";
import AframeTest from "@/components/aframe/aframeTest"
import PhotoTest from "@/components/aframe/photoTest"
import MovieTest from "@/components/aframe/movieTest"

// Aframeページを呼び出す
export default function ViewVR() {
    // dynamicで呼び出す必要がある時もある。
    // const MovieTest = dynamic(() => import("@/components/aframe/movieTest"), {
    const PhotoTest = dynamic(() => import("@/components/aframe/photoTest"), {
        // const AframeTest = dynamic(() => import("@/components/map/aframeTest"), {
        loading: () => <p>A content is loading</p>,
        ssr: false,
    })
    
    return (
        <div>
            {/* <AframeTest /> */}
            <PhotoTest />
            {/* <MovieTest /> */}
        </div>
    )
}