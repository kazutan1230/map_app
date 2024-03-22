"use client"

import React, { FC } from "react"
import { MapContainer, TileLayer } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { LatLngTuple } from "leaflet"
import { CurrentPos } from "@/components/map/currentPos"
import { MarkersInit } from "@/components/map/markersInit"
import { BackToTop } from "@/components/map/backToTop"

type MapContanerProps = {
    height: string
    width: string
}

const Map: FC<MapContanerProps> = ({ height, width }) => {
    const position : LatLngTuple = [39.799028508510965, 141.13453924655917];
    return (
        <MapContainer center={position} zoom={9} scrollWheelZoom={true} style={{height: height, width: width}}>
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