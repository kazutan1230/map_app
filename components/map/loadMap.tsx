import dynamic from "next/dynamic";
import React from "react";

// Mapを動的に呼び出す
export default function LoadMap() {
    const Map = React.useMemo(
        () =>
        dynamic(() => import("@/components/map/map"), {
            loading: () => <p>A map is loading</p>,
            ssr: false,
        }),
        []
    )
    return (
        <Map/>
    )
}