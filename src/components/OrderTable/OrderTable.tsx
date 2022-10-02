import MenuItem from '@mui/material/MenuItem'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import Select from '@mui/material/Select'
import TableRow from '@mui/material/TableRow'
import { useSelector } from 'react-redux'
import { changePoint, focus, getFocused, getOrders, getPoints } from '../../redux/slices/mapSlice'
import { useCallback, memo } from 'react'
import { useAppDispatch } from '../../redux/store'
import { defaultPropagationStop } from '../../utils/defaultPropagationStop'

const OrderTable = () => {
  const points = useSelector(getPoints)
  const focused = useSelector(getFocused)
  const orders = useSelector(getOrders)
  const dispatch = useAppDispatch()

  const changePointHandler = useCallback((e: any) => {
    dispatch(changePoint({ 
      type: e.target.name, 
      pointId: e.target.value
    }))
  }, [])

  const focusOrderHandler = useCallback((e: any) => {
    dispatch(focus({ orderIndex: parseInt(e.currentTarget.dataset.orderid) }))
  }, [])

  return (
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ top: 57, width: 10 }}>
                  №
              </TableCell>
              <TableCell style={{ top: 57, minWidth: 150 }}>
                  Заказ
              </TableCell>
              <TableCell style={{ top: 57, minWidth: 150 }}>
                  Загрузка
              </TableCell>
              <TableCell style={{ top: 57, minWidth: 150 }}>
                  Выгрузка
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order, i) => {
                const isFocused = order.id === focused?.id
                return (
                  <TableRow
                    hover 
                    tabIndex={-1}
                    key={order.id}
                    selected={isFocused}
                    onClick={focusOrderHandler}
                    data-orderid={i}
                    style={{ minWidth: 170, cursor: 'pointer' }}
                  >
                    <TableCell>{order.id}</TableCell>
                    <TableCell>{order.title}</TableCell>
                    <TableCell>
                      <Select 
                        defaultValue={order.loadingPoint.id} 
                        sx={{ width: '100%' }}
                        name="loadingPoint"
                        onChange={changePointHandler}
                        onClick={isFocused ? defaultPropagationStop : undefined}
                        disabled={!isFocused}
                      >
                        {points.map(point => {
                          const alreadyChoosen = order.unloadingPoint.id === point.id
                          return !alreadyChoosen && (
                            <MenuItem
                              key={point.id} 
                              value={point.id}
                              selected={order.loadingPoint.id === point.id}
                            >
                              {point.title}
                            </MenuItem>
                          )
                        })}
                      </Select>
                    </TableCell>
                    <TableCell sx={{ minWidth: 200 }}>
                      <Select 
                        defaultValue={order.unloadingPoint.id} 
                        sx={{ width: '100%' }}
                        name="unloadingPoint"
                        onChange={changePointHandler}
                        onClick={isFocused ? defaultPropagationStop : undefined}
                        disabled={!isFocused}
                      >
                        {points.map((point) => {
                          const alreadyChoosen = order.loadingPoint.id === point.id
                          return !alreadyChoosen && (
                            <MenuItem 
                              key={point.id} 
                              value={point.id}
                              selected={order.unloadingPoint.id === point.id}
                            >       
                              {point.title}
                            </MenuItem>
                          )
                        })}
                      </Select>
                    </TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
  )
}

export default memo(OrderTable)
