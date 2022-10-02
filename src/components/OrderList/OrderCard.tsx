import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Typography } from '@mui/material'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import React from 'react';
import type { Order } from '../../redux/types';

const orders = [
  {
    id: 1,
    title: 'home',
    loadingPoint: {
      latitude: 1,
      longitude: 2
    },
    unloadingPoint: {
      latitude: 1,
      longitude: 2
    }
  }
]

type OrderProps = Omit<Order, "id"> & {
  onChange: (e: SelectChangeEvent) => void
  pointList: Array<string>
}

export const OrderCard: React.FC<OrderProps> = ({ 
  onChange,
  title,
  loadingPoint,
  unloadingPoint,
  pointList
}) => (
    <Box sx={{ 
      bgcolor: 'background.paper',
      border: 1,
      borderRadius: 2,
      padding: 2,
      maxWidth: 300
    }}>
      <FormControlLabel value={title} control={<Radio />} label={title} />
      <InputLabel id="demo-simple-select-label">loadingPoint</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="loadingPoint"
        name="loadingPoint"
        onChange={onChange}
        sx={{ width: 200 }}
      >
        {pointList?.map(point => (
          <MenuItem key={point} value={point}>{point}</MenuItem>
        ))}
      </Select>
      <InputLabel id="demo-simple-select-label2">unloadingPoint</InputLabel>
      <Select
        labelId="demo-simple-select-label2"
        id="demo-simple-select2"
        label="unloadingPoint"
        name="unloadingPoint"
        onChange={onChange}
        sx={{ width: 200 }}
      >
        {pointList?.map(point => (
          <MenuItem key={point} value={point}>{point}</MenuItem>
        ))}
      </Select>
    </Box>
  )
