import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
// import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VR Contents',
  description: 'Contents for VR',
}

export default function ContentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <section>{children}</section>
      <Script
          src="https://aframe.io/releases/1.5.0/aframe.min.js"
      />
      {/* Entityにイベントを設定するjs */}
      <Script
        src="https://unpkg.com/aframe-event-set-component@^4.0.0/dist/aframe-event-set-component.min.js"
      />
      <Script
        src="js/play-on-click.js"
        strategy="lazyOnload"
      />
      <Script
        src="js/hide-on-play.js"
        strategy="lazyOnload"
      />
      <Script
        src="js/visible-on-play.js"
        strategy="lazyOnload"
      />
    </>
  )
}
