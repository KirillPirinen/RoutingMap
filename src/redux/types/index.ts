
export type Progress = {
  name: string
  color: string
  value: number
}

export type ProgressBarData = Array<Progress>

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
