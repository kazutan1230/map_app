import React, { useState } from "react";
import { Popup, Marker, useMap } from "react-leaflet";

export function CurrentPos() {
    const map = useMap()
    const [userPosition, setUserPosition] = useState<{ lat: number; lng: number} | null>(null)

    // ユーザーの位置を state として保持し、初期値は null とします。
    const onClick = () => {
        
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords
                map.setView([latitude, longitude])

                setUserPosition({ lat: latitude, lng: longitude})
            },
            () => {
                alert("現在地の取得に失敗しました。")
            },
    
        )
    }
    return(
            <div className="leaflet-top leaflet-right">
            <div className="leaflet-control leaflet-bar">
                <button onClick={onClick}>現在地を表示</button>
            </div>

            {/* ユーザーの位置を示すマーカーを描画し、ポップアップでメッセージを表示する。 */}
            {userPosition && (
                <Marker position = {userPosition}>
                    <Popup>You are here</Popup>
                </Marker>
            )}
        </div>
    )
}
