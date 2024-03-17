"use client"
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

// コンテンツのpathと名前を引数として受け取り、そのコンテンツページurlに入れて遷移するbutton
export function MoveToContents(pathName: string, srcType: string, src: string) {
    const router = useRouter()

    // クエリ文字列を作成。Record<string, string>で二つの値を持つオブジェクトを渡す。
    // ここでは、srcTypeとsrcの値を渡せるようになってる。
    const createQueryString = useCallback(
      (params: Record<string, string> ) => {
        const searchParams = new URLSearchParams(params)
        return searchParams.toString()
      },
      []
    )

    // paramsの中でsrcTypeとsrcのnameと値を定義。
    // router.push()の中ではpathName?queryStringでhrefが作成できてる。string型。
    return (
        <button
          onClick={() => {
            const params = {
                srcType: srcType,
                src: src
            }
            const queryString = createQueryString(params)
            router.push(pathName + "?" + queryString)
          }}
          className="bg-yellow-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full mb-2"
        >
          コンテンツページへ
        </button>
    )
}

export const GetContentName = (name: string) => {
    const params = useSearchParams().get(name)
    return params
}
