import dynamic from "next/dynamic";
import React from "react";

type MapContanerProps = {
    height: string
    width: string
}

// Mapを動的に呼び出す
export default function LoadMap({ height, width }: MapContanerProps) {
    const Map = React.useMemo(
        () =>
        dynamic(() => import("@/components/map/map"), {
            loading: () => <p>A map is loading</p>,
            ssr: false,
            // loading.gif入れてグルグルさせたい。
        }),
        []
    )
    return (
        <Map height={height} width={width}/>
    )
}