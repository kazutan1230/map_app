import { LatLngExpression } from "leaflet"
import type { Path } from "react-hook-form"

export type Contents = {
    coods: LatLngExpression,
    name: string,
    srcType: string,
    src: FileList | string | null,
}

export type ContentsItem = {
    name: Path<Contents>,
    label: string,
    type: string,
    placeholder?:string
}