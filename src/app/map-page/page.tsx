import dynamic from "next/dynamic";
import React from "react";

export default function MapPage() {
    const Map = React.useMemo(
        () =>
        dynamic(() => import("../../components/map"), {
            loading: () => <p>A map is loading</p>,
            ssr: false,
        }),
        []
    );
    return <Map />
}