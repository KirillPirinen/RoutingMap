import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import type { Order, Point } from '../types/index'
import type { PayloadAction } from '@reduxjs/toolkit'
import { points, orders } from '../__mockData__'

export type MapInitialState = {
  focused: Order | null,
  points: Array<Point>
  orders: Array<Order>
}

const initialState: MapInitialState = {
  focused: null,
  points,
  orders
}

export const mapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    focus(state, action: PayloadAction<{
      orderIndex: number
    }>) {
      state.focused = state.orders[action.payload.orderIndex]
    },
    changePoint(state, action: PayloadAction<{
      pointId: string
      type: "loadingPoint" | "unloadingPoint"
    }>) {
      const { type, pointId } = action.payload
      const point = state.points.find(el => el.id === pointId)
      if(state.focused && point) {
        state.focused[type] = point
      }
    },
    clearFocus(state) {
      state.focused = null
    }
  }
})

export const getPoints = (state: RootState) => state.map.points
export const getFocused = (state: RootState) => state.map.focused
export const getOrders = (state: RootState) => state.map.orders

export const { focus, clearFocus, changePoint } = mapSlice.actions

export default mapSlice.reducer
