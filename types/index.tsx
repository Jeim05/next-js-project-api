
export interface Character {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: Location,
    location: Location,
    image: string,
    url: string,
}

export interface Location {
    id: number,
    name: string
    url: string
}
