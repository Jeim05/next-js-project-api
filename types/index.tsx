
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
    episode: Episode,
    url: string,
}

export interface Location {
    id: number,
    name: string,
    type: string,
    dimension: string,
    residents: Character[],
    url: string
}

export interface Episode {
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters: Character[],
    url: string
}