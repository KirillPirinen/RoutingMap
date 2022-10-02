import axios from 'axios'

export const network = axios.create({
  baseURL: 'https://api.openrouteservice.org',
  headers: {
    Authorization: '5b3ce3597851110001cf62484604c708ebc44dfb8afa3777bdb8eb3b'
  }
})
