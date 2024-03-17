import "leaflet/dist/leaflet.css"
import React from "react"
import { LatLngExpression } from "leaflet"
import { Popup, Marker } from "react-leaflet"
import { MoveToContents } from "@/components/parts/sendValues"

import L from "leaflet"
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png"
import markerIcon from "leaflet/dist/images/marker-icon.png"
import markerShadow from "leaflet/dist/images/marker-shadow.png"

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon.src,
  iconRetinaUrl: markerIcon2x.src,
  shadowUrl: markerShadow.src,
})

export function MarkerLabel({coods, str, srcType, src }:{ coods: LatLngExpression, str: string, srcType: string, src: string }) {
  // Markerを返すfunction
    return (
      // <Marker position = {[35.658577, 139.745451]}>
      <Marker position = {coods}>
        <Popup>
          {str}
          <br />
          { MoveToContents("/contents", srcType, src ) }
          {/* <a onClick={() => MoveToContents("/contents", str)} style={{cursor: "pointer"}}>コンテンツへ</a> */}
          {/* <a href="contents">aframeテストリンク</a> */}
        </Popup>
      </Marker>
    )
}
