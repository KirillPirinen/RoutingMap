import { createAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { ApiBody, Coords, Order, Point } from '../types/index'
import type { PayloadAction } from '@reduxjs/toolkit'
import { points, orders } from '../__mockData__'
import { sagaActions } from '../sagas/rootSaga'

export type MapInitialState = {
  focused: Order | null
  points: Array<Point>
  orders: Array<Order>
  path: Array<Coords>
}

const initialState: MapInitialState = {
  focused: null,
  points,
  orders,
  path: []
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
      if(state.focused?.[type] && point) {
        state.focused[type] = point
      }
    },
    setPath(state, action: PayloadAction<Array<Coords>>) {
      state.path = action.payload
    },
    clearFocus(state) {
      state.focused = null
    }
  }
})

export const getPoints = (state: RootState) => state.map.points
export const getFocused = (state: RootState) => state.map.focused
export const getOrders = (state: RootState) => state.map.orders
export const getPath = (state: RootState) => state.map.path

export const { focus, clearFocus, changePoint, setPath } = mapSlice.actions

export const fetchPath = createAction<ApiBody>(sagaActions.GET_PATH_SAGA)

export default mapSlice.reducer
