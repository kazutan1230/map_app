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
        <MarkerLabel coods={[39.647016, 141.9423927]} str="つつじが丘公園" srcType="img" src="/src/009_Miyako_Park.jpg" />
        <MarkerLabel coods={[39.4391899, 141.9682084]} str="山田かき小屋" srcType="img" src="/src/010_Yamada_Seaside.jpg" />
        <MarkerLabel coods={[39.007391, 141.6248461]} str="東日本大震災津波伝承館 (いわてTSUNAMI(つなみ)メモリアル)" srcType="img" src="/src/011_Memorial.jpg" />
        <MarkerLabel coods={[39.005267, 141.632033]} str="名勝高田松原" srcType="img" src="/src/012_Takada_Seaside.jpg" />
        <MarkerLabel coods={[39.003413, 141.625080]} str="奇跡の一本松" srcType="img" src="/src/013_Ipponmatsu.jpg" />
        <MarkerLabel coods={[39.006212, 141.6291505]} str="道の駅高田松原" srcType="img" src="/src/014_Takada.jpg" />
        {/* <MarkerLabel coods={[, ]} str="" srcType="" src="" /> */}
        </>
      )
}
