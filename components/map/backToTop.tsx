import React, { useState } from "react";
import { Popup, Marker, useMap } from "react-leaflet";

export function BackToTop() {
    // Topページを呼び出すbutton
    return (
        <div className="leaflet-bottom leaflet-left">
            <div className="leaflet-control leaflet-bar">
                <a href="/">Topへ戻る</a>
            </div>
        </div>
    )
}
