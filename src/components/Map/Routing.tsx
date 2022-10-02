import React, { useLayoutEffect, useRef, memo, useEffect } from 'react'
import { MapContainer, TileLayer, Marker, Popup, Polyline} from 'react-leaflet'
import { useSelector } from 'react-redux'
import { fetchPath, getFocused, getPath } from '../../redux/slices/mapSlice'
import { useAppDispatch } from '../../redux/store'

const Routing: React.FC = () => {
  const dispatch = useAppDispatch()
  const focused = useSelector(getFocused)
  const path = useSelector(getPath)
  const mapRef = useRef<any>(null)

  useEffect(() => {
     if(focused) {
      const { loadingPoint, unloadingPoint } = focused
        dispatch(fetchPath([
          [loadingPoint.longitude, loadingPoint.latitude],
          [unloadingPoint.longitude, unloadingPoint.latitude]
        ]))
     }
  }, [focused])

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(() => mapRef.current?.invalidateSize())
    const container = document.getElementById('map-container')
    if (container) {
      resizeObserver.observe(container)
      return () => resizeObserver.unobserve(container)
    }
  }, [])

  return (
    <MapContainer 
      style={{ height: '100%', width:'100%' }} 
      center={[55.755811, 37.617617]} 
      zoom={10}
      scrollWheelZoom={false}
      id="map-container"
      ref={mapRef}
    >
      <TileLayer
        attribution='&copy <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {focused && (
        <>
          <Marker position={[
            focused.loadingPoint.latitude,
            focused.loadingPoint.longitude
          ]}>
            <Popup>
              {focused.loadingPoint.title}
            </Popup>
          </Marker>
          <Marker position={[
            focused.unloadingPoint.latitude,
            focused.unloadingPoint.longitude
          ]}>
            <Popup>
              {focused.unloadingPoint.title}
            </Popup>
          </Marker>
        </>
      )}
      {/*@ts-ignore*/}
      {Boolean(path.length) && <Polyline positions={path} />}
    </MapContainer>
  )
}

export default memo(Routing)
