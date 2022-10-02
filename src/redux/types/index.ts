
export type Point = {
  id: string,
  title: string,
  latitude: number
  longitude: number
}

export type Order = {
  id: string | number
  title: string
  loadingPoint: Point
  unloadingPoint: Point
}

export type Coords = Array<number>

export type ApiData = {
  features: [{
    geometry: {
      coordinates: Array<Coords>
    }
  }]
}

export type ApiBody = [Coords, Coords]
