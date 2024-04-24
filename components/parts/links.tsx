import Link from 'next/link'
import React, { FC } from 'react'

// Webページ内でトップページに飛ぶボタン
export const GoToTopPageButton:FC = () => {
    return (
        <Link href="/" className="btn btn-primary">トップページへ戻る</Link>
    )
}
