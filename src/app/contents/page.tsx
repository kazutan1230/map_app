import dynamic from "next/dynamic";
import React from "react";

import AframeTest from "../../components/map/aframeTest"

// Mapを呼び出す
export default function ContentsPage() {
    const Map = React.useMemo(
        () =>
        dynamic(() => import("../../components/map/map"), {
            loading: () => <p>A content is loading</p>,
            ssr: false,
        }),
        []
    );
    return (
        <div>
            <AframeTest />
        </div>
    )
}