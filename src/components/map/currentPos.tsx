"use client"

import React, { useState } from "react";
import { Popup, useMapEvents, Marker, useMap } from "react-leaflet";
// import L, { LatLngTuple } from "leaflet";

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

// mapのどこでもクリックしたら現在地に飛ぶ。
// ユーザーの位置を示す LocationMarker コンポーネント
// export function CurrentPositionMarker () {
//     // ユーザーの位置を state として保持し、初期値は null とします。
//     const [position, setPosition] = useState<LatLngTuple | null>(null)

//     // useMapEvents フックを使用して地図上のイベントをハンドリングします。
//     const map = useMapEvents({
//         // ユーザーが地図上でクリックすると位置を特定します。
//         click() {
//             map.locate()
//         },
//         // ユーザーの位置が特定されると呼び出されます。
//         locationfound(e) {
//             // LatLngオブジェクトからLatLngTupleに変換してセット
//             setPosition([e.latlng.lat, e.latlng.lng])
//             // 地図をユーザーの位置まで移動します。
//             map.flyTo(e.latlng, map.getZoom())
//         },
//     })

//     // ユーザーの位置がセットされていない場合は何も描画しません。
//     return position === null ? null : (
//         // ユーザーの位置を示すマーカーを描画し、ポップアップでメッセージを表示します。
//         <Marker position = {position}>
//             <Popup>You are here</Popup>
//         </Marker>
//     )
// }

