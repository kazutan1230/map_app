import dynamic from "next/dynamic";
import React from "react";

import EventsExample from "../../components/events"

// Mapを呼び出す
export default function MapPage() {
    const Map = React.useMemo(
        () =>
        dynamic(() => import("../../components/map"), {
            loading: () => <p>A map is loading</p>,
            ssr: false,
        }),
        []
    );
    return (
        <div>
            <Map />
            
            EventsExample
            <EventsExample />
        </div>
    )
}