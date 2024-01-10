"use client"

import "leaflet/dist/leaflet.css";
import React, { Component } from "react";
import { LatLngExpression, LatLngTuple, map } from "leaflet";
import { Popup, useMap, Marker } from "react-leaflet";

import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
})

export function MarkerLabel({coods, str}:{ coods: LatLngExpression, str: string}) {
  // Markerを返すfunction
    return (
      // <Marker position = {[35.658577, 139.745451]}>
      <Marker position = {coods}>
        <Popup>
          {str}
          <br />
          <a href="map-page/test">テストリンク</a>
        </Popup>
      </Marker>
    )
}
