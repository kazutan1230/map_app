import dynamic from "next/dynamic";
import React from "react";

import Map from "../../components/map/map"
// import { currentPos } from "../../components/map/currentPosition"

// Mapを呼び出す
export default function MapPage() {
    const Map = React.useMemo(
        () =>
        dynamic(() => import("../../components/map/map"), {
            loading: () => <p>A map is loading</p>,
            ssr: false,
        }),
        []
    );
    return (
        <div>
            <Map />
        </div>
    )
}