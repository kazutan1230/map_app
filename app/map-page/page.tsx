import dynamic from "next/dynamic"
import React from "react"
import LoadMap from "@/components/map/loadMap"

// Mapを呼び出す
export default function MapPage() {

    return (
        <div>
            <LoadMap height="100svh" width="100svw"/>
        </div>
    )
}