import Link from 'next/link'
import React, { FC } from 'react'

// Webページ内でトップページに飛ぶボタン
export const GoToTopPageButton = () => {
    return (
        <Link href="/" className="btn btn-primary">トップページへ戻る</Link>
    )
}
