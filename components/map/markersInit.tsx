import "leaflet/dist/leaflet.css";
import React from "react";
import { MarkerLabel } from "./markerLabel";


export function MarkersInit() {
  // Markerを返すfunction
  return (
      // <Marker position = {[35.658577, 139.745451]}>
      <>
        <MarkerLabel coods={[39.80045216847385, 141.13726605322813]} str="滝沢市IPUイノベーションセンター" srcType="img" />
        <MarkerLabel coods={[39.85309141008037, 141.00087480682427]} str="岩手山" srcType="" />
        <MarkerLabel coods={[39.73480203679803, 141.0770300532239]} str="滝沢市役所" srcType="img" />
        <MarkerLabel coods={[39.73395222003922, 141.07854281907703]} str="ビッグルーフ滝沢" srcType="url" />
        <MarkerLabel coods={[39.799020187416154, 141.14977941089967]} str="滝沢駅" srcType="movie" />
      </>
      )
}
