"use client"

import React, { Component, useState } from "react";
import { MapContainer, TileLayer, useMapEvent, Popup, useMapEvents, Marker } from "react-leaflet";

function LocationMarker () {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
    })

    return position === null ? null : (
        <Marker position = {position}>
            <Popup>You are here</Popup>
        </Marker>
    )
}

class EventsExample extends Component {
    render() {
        const position = [51.505, -0.09];
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