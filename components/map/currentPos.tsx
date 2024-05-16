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
                <button onClick={onClick}>
                    <svg className="w-[48px] h-[48px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"/>
                    </svg>
                </button>
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
