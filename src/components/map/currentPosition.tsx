"use client"

// マップをクリックすると現在地に飛ぶ

import React, { useState } from "react";
import { Popup, useMapEvents, Marker, useMap } from "react-leaflet";
import L, { LatLngTuple } from "leaflet";

// ユーザーの位置を示す LocationMarker コンポーネント
export function LocationMarker () {
    // ユーザーの位置を state として保持し、初期値は null とします。
    const [position, setPosition] = useState<LatLngTuple | null>(null)

    // useMapEvents フックを使用して地図上のイベントをハンドリングします。
    const map = useMapEvents({
        // ユーザーが地図上でクリックすると位置を特定します。
        click() {
            map.locate()
        },
        // ユーザーの位置が特定されると呼び出されます。
        locationfound(e) {
            // LatLngオブジェクトからLatLngTupleに変換してセット
            setPosition([e.latlng.lat, e.latlng.lng])
            // 地図をユーザーの位置まで移動します。
            map.flyTo(e.latlng, map.getZoom())
        },
    })

    // ユーザーの位置がセットされていない場合は何も描画しません。
    return position === null ? null : (
        // ユーザーの位置を示すマーカーを描画し、ポップアップでメッセージを表示します。
        <Marker position = {position}>
            <Popup>You are here</Popup>
        </Marker>
    )
}

export function CurrentPos() {
    const map = useMap()

    const onClick = () => {
        navigator.geolocation.getCurrentPosition(
            position => {
                map.setView([position.coords.latitude, position.coords.longitude])
            },
            () => {
                alert("現在地の取得に失敗しました。")
            }
        )
    }
    return(
        <div className="leaflet-top leaflet-right">
            <div className="leaflet-control leaflet-bar">
                <button onClick={onClick}>現在地を表示</button>
            </div>
        </div>
    )
}

// export function LocateButton ({ position } : { position: string }) : HTMLButtonElement {
//     const map = useMap()
//     const customButton = L.Control.extend({
//         options: {
//             position: position
//         },
//         onAdd: function() {
//             const button = L.DomUtil.create(
//                 "button",
//                 "leaflet-bar leaflet-control leaflet-control-custom"
//             )
//             button.innerHTML = "<img src='/location.svg7 class='currentPositon />"
//             button.className = "customButton"

//             button.onclick = function() {
//                 if (navigator.geolocation){
//                     navigator.geolocation.getCurrentPosition(
//                         (location) => {
//                             map.setView(
//                                 [location.coords.latitude, location.coords.longitude],
//                                 14
//                             )

//                             L.marker([location.coords.latitude, location.coords.longitude])
//                             .bindPopup("You are here.")
//                             .addTo(map)
//                         },
//                         (err) => {
//                             console.log(err)
//                         }
//                     )
//                 } else {
//                     console.log("ブラウザが対応していません")
//                 }
//             }
//             return button
//         }
//     })
//     map.addControl(new customButton())
// }
