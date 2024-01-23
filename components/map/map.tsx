"use client"

import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import React, { Component } from "react";
import { LatLngTuple } from "leaflet";
import { CurrentPos } from "./currentPos";
import { MarkerLabel } from "./markerLabel";

import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import { MarkersInit } from "./markersInit";

// delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
})

class Map extends Component {
    render() {
        // const position : LatLngTuple = [51.505, -0.09];
        const position : LatLngTuple = [39.799028508510965, 141.13453924655917];
        return (
            <MapContainer center={position} zoom={12} scrollWheelZoom={true} style={{height: "100vh", width: "100%"}}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                <CurrentPos />
                <MarkersInit />
            </MapContainer>
        )
    }
}

export default Map
