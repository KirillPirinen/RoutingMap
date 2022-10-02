import { PayloadAction } from '@reduxjs/toolkit'
import { takeEvery, put } from 'redux-saga/effects'
import { network } from '../../utils/network'
import { setPath } from '../slices/mapSlice'
import { ApiBody, ApiData, Coords } from '../types'

export const enum sagaActions {
  GET_PATH_SAGA = 'GET_PATH_SAGA'
}

export function* fetchNumberSaga(action: PayloadAction<ApiBody>) {
  try {
    const { data } = yield network.post<ApiData>('v2/directions/driving-car/geojson', {
      coordinates: action.payload
    })
    if(data.features?.[0]?.geometry?.coordinates?.length) {
      const reversedCoords = data.features[0].geometry.coordinates.map((coord: Coords) => {
        return coord.reverse()
      })
      yield put(setPath(reversedCoords))
    } else {
      yield put({ type: 'SAGA_FAILED' })
    }
  } catch (e) {
    yield put({ type: 'SAGA_FAILED' })
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.GET_PATH_SAGA, fetchNumberSaga)
}
