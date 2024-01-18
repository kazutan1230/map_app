import React from "react";

import dynamic from "next/dynamic";
import AframeTest from "../../components/map/aframeTest"

// Aframeページを呼び出す
export default function ContentsPage() {
    const AframeTest = dynamic(() => import("../../components/map/aframeTest"), {
        loading: () => <p>A content is loading</p>,
        ssr: false,
    })
    
    return (
        <div>
            <AframeTest />
        </div>
    )
}