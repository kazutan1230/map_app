"use client"

import React, { Component, useState } from "react";
import { MapContainer, TileLayer, useMapEvent, Popup, useMapEvents, Marker } from "react-leaflet";
import { LatLngTuple } from "leaflet";

// ユーザーの位置を示す LocationMarker コンポーネント
function LocationMarker () {
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

// メインの EventsExample コンポーネント
class EventsExample extends Component {
    render() {
        const position : LatLngTuple = [51.505, -0.09];
        return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LocationMarker />
        </MapContainer>
        )
    }
}

export default EventsExample