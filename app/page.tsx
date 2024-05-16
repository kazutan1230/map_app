import { Header } from '@/components/parts/header'
import reloadPage from '@/components/parts/reloadPage'
import LoadMap from '@/components/map/loadMap'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex sm:min-h-screen flex-col items-center justify-between p-8">
        {/* LeafletによりOpenMapを表示 */}
        <div className="grid text-center xl:max-w-5xl lg:max-w-3xl w-full h-full">
          <div className="z-0 mb-0 md:h-full sm:aspect-video aspect-square">
            <LoadMap height="100%" width="100%"/>
          </div>
          <br/>
          <small>
            <Link href="map-page" className="btn btn-primary md:mx-10 mx-3 mb-3">大きな地図を表示</Link>
            <button onClick={reloadPage} className="btn btn-primary md:mx-10 mx-3 mb-3">ページ再読み込み</button>
          </small>
        </div>
      </main>
    </div>
  )
}
