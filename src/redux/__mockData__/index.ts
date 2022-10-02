export const points = [
  {
    id: '1',
    title: 'moscow',
    longitude: 37.64036178588868,
    latitude: 55.75658286166609, 
  },
  {
    id: '2',
    title: 'graveyard',
    longitude: 37.800779342651374,
    latitude: 55.70714292647206
  },
  {
    id: '3',
    title: 'lyubertsy',
    longitude: 37.88927078247071,
    latitude: 55.67952018578074
  },
  {
    id: '4',
    title: 'golyanovo',
    longitude: 37.80206680297852,
    latitude: 55.8183550415602
  }
]

export const orders = [
  {
    id: '1',
    title: 'from moscow to graveyard',
    loadingPoint: points[0],
    unloadingPoint: points[1]
  },
  {
    id: '2',
    title: 'from graveyard to lyubertsy',
    loadingPoint: points[1],
    unloadingPoint: points[2]
  },
  {
    id: '3',
    title: 'from lyubertsy to golyanovo',
    loadingPoint: points[2],
    unloadingPoint: points[3]
  }
]
