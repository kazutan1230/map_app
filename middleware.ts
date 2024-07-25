// export { auth as middleware } from "@/auth"
// ↑だと他にmiddlewareを追加したくなったらas middlewareだと困ると思う。

import { auth } from "@/auth"
import { NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
    // どうしてもconfigで / を除外できないので、ここで判別してそのまま/に通す。
    if (request.nextUrl.pathname === "/") return

    // authorizedの使途不明なのでsession取って判断する。
    const session = await auth()
    if ( !session ) {
        return NextResponse.redirect(new URL("/signin", request.url))
    }
}

// middleware.tsの処理を除外するページを設定。
// 非認証時publicディレクトリのファイルを読めなくなるので、拡張子を持つものの正規表現 .*\\..* を追加して対応。
export const config = {
    matcher: [
        "/((?!api|actions|contents|map-page|signin|signup|_next/static|_next/image|.*\\..*|favicon.ico).*)"
    ],
}