import MenuItem from '@mui/material/MenuItem'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow'
import { useSelector } from 'react-redux'
import { changePoint, focus, getFocused, getOrders, getPoints } from '../../redux/slices/mapSlice'
import React from 'react'
import { useAppDispatch } from '../../redux/store'
import { defaultPropagationStop } from '../../utils/defaultPropagationStop'

interface Column {
  id: 'name' | 'code' | 'population' | 'size' | 'density'
  label: string
  minWidth?: number
  align?: 'right'
  format?: (value: number) => string
}

const columns: Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
]

interface Data {
  name: string
  code: string
  population: number
  size: number
  density: number
}

function createData(
  name: string,
  code: string,
  population: number,
  size: number,
): Data {
  const density = population / size
  return { name, code, population, size, density }
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
]

const OrderTable = () => {
  const points = useSelector(getPoints)
  const focused = useSelector(getFocused)
  const orders = useSelector(getOrders)
  const dispatch = useAppDispatch()

  const changePointHandler = (e: any) => {
    dispatch(changePoint({ 
      type: e.target.name, 
      pointId: e.target.value
    }))
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
  }

  const focusOrderHandler = (e: any) => {
    dispatch(focus({ orderIndex: parseInt(e.currentTarget.dataset.orderid) }))
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
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
                        {points.map(point => (
                          <MenuItem
                            key={point.id} 
                            value={point.id}
                            selected={order.loadingPoint.id === point.id}
                          >
                            {point.title}
                          </MenuItem>
                        ))}
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
                        {points.map((point) => (
                          <MenuItem 
                            key={point.id} 
                            value={point.id}
                            selected={order.unloadingPoint.id === point.id}
                          >       
                            {point.title}
                          </MenuItem>
                        ))}
                      </Select>
                    </TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      </Paper>
  )
}

export default OrderTable
