import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { ProgressBarData } from '../types'

const initialState: ProgressBarData = [
  {name: 'Sold', color: '#BD1FBE', value: 677},
  {name: 'Got free', color: '#FC64FF', value: 23},
  {name: 'Free float', color: 'black', value: 0},
  {name: 'Damaged', color: 'red', value: 1},
  {name: 'Burned', color: 'green', value: 202},
  {name: 'Zipped', color: 'gray', value: 323},
  {name: 'Published', color: 'brown', value: 1}
]

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {}
})

export const getData = (state: RootState) => state.dataSlice

export default dataSlice.reducer
