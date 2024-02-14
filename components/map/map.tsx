"use client"

import React, { FC } from "react"
import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { LatLngTuple } from "leaflet"
import { CurrentPos } from "@/components/map/currentPos"
import { MarkersInit } from "@/components/map/markersInit"
import { BackToTop } from "@/components/map/backToTop"

const Map: FC = () => {
    const position : LatLngTuple = [39.799028508510965, 141.13453924655917];
    return (
        <MapContainer center={position} zoom={12} scrollWheelZoom={true} style={{height: "100vh", width: "100%"}}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <CurrentPos />
            <MarkersInit />
            <BackToTop />
        </MapContainer>
    )
}

export default Map