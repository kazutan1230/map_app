import "leaflet/dist/leaflet.css";
import React from "react";
import { MarkerLabel } from "./markerLabel";


export function MarkersInit() {
  // Markerを返すfunction
  // 正味、Use serverでできるようにした方がええ。DBとオブジェクトストレージへのアクセスしてから、出した方がええと思ってる。
  return (
      <>
        <MarkerLabel coods={[39.80045216847385, 141.13726605322813]} str="滝沢市IPUイノベーションセンター" srcType="img" src="/src/001_inov.jpg" />
        <MarkerLabel coods={[39.85309141008037, 141.00087480682427]} str="岩手山" srcType="" src="" />
        <MarkerLabel coods={[39.73480203679803, 141.0770300532239]} str="滝沢市役所" srcType="img" src="" />
        <MarkerLabel coods={[39.73395222003922, 141.07854281907703]} str="ビッグルーフ滝沢" srcType="url" src="" />
        <MarkerLabel coods={[39.799020187416154, 141.14977941089967]} str="滝沢駅" srcType="movie" src="https://bitmovin-a.akamaihd.net/content/playhouse-vr/progressive.mp4" />
        <MarkerLabel coods={[39.6008191, 140.5612398]} str="滝角館 石黒家" srcType="img" src="/src/006_kakunodate.jpg" />
        <MarkerLabel coods={[39.8051589, 140.7607171]} str="乳頭温泉" srcType="img" src="/src/007_nyuto.jpg" />
        <MarkerLabel coods={[41.3245963, 141.0905963]} str="恐山" srcType="movie" src="/src/008_osorezan.mp4" />
        <MarkerLabel coods={[39.7969302, 141.1294735]} str="滝沢の一本桜" srcType="img" src="/src/009_takizawacherry.jpg" />
        <MarkerLabel coods={[39.9501237, 140.8563794]} str="八幡平アスピーテライン 雪の回廊" srcType="img" src="/src/010_yukikabe.jpg" />
        <MarkerLabel coods={[39.9546, 140.8539]} str="鏡沼 ドラゴンアイ" srcType="img" src="/src/011_dragoneye.jpg" />
        <MarkerLabel coods={[39.798917, 141.1391753]} str="馬コ in イノベーションセンター" srcType="img" src="/src/012_inovhorse.jpg" />
        <MarkerLabel coods={[40.0699, 140.3002]} str="上小阿仁村" srcType="img" src="/src/013_vilkamikoani.jpg" />
        {/* <MarkerLabel coods={[, ]} str="" srcType="" src="" /> */}
        </>
      )
}
