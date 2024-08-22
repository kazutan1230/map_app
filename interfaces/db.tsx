export type Point = {
    latitude: number
    longitude: number
}

export type Location = {
    name: string
    address: string | null
    position: Point
}