"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

// コンテンツのpathと名前を引数として受け取り、そのコンテンツページurlに入れて遷移するbutton
export function MoveToContents(pathName: string, srcType: string) {
    const router = useRouter()
    // const pathName = usePathname()
    const searchParams = useSearchParams()

    const createQueryString = useCallback(
        (name: string, value: string) => {
          const params = new URLSearchParams(searchParams.toString())
          params.set(name, value)
     
          return params.toString()
        },
        [searchParams]
      )

    return (
        <button
          onClick={() => {
            router.push(pathName + '?' + createQueryString('srcType', srcType))
          }}
          className="bg-yellow-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full mb-2"
        >
          コンテンツページへ
        </button>
    )
}

// コンテンツの名前nameを受け取る。
// export const GetContentName = (name: string) => {
//     const match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search)
//     return match && decodeURIComponent(match[1].replace(/\+/g, ' '))
// }
export const GetContentName = (name: string) => {
    const params = useSearchParams().get(name)
    return params
}


