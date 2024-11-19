import reloadPage from '@/components/parts/reloadPage'
import Link from 'next/link'
import React from 'react'
import { Header } from '@/components/parts/header'
import { auth } from '@/auth'

export default async function Dummy() {
  const session = await auth()
  return (
    <div>
      <Header session={session} />
      <main className="flex sm:min-h-screen flex-col items-center justify-between p-8">

          <small>
            <Link href="map-page" className="btn btn-primary md:mx-10 mx-3 mb-3">大きな地図を表示</Link>
            <button onClick={reloadPage} className="btn btn-primary md:mx-10 mx-3 mb-3">ページ再読み込み</button>
          </small>
      </main>
    </div>
  )
}
