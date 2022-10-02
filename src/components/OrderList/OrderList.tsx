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
import { OrderCard } from './OrderCard';

export const OrderList = () => {
  return (
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="female"
      name="radio-buttons-group"
    >
      <OrderCard 
        onChange={(e) => console.log(e.target.name)}
        pointList={['туда', 'сюда']}
        title="Первая точка"
        loadingPoint={{
          id:'1',
          title: 'work',
          latitude: 1,
          longitude: 2
        }}
        unloadingPoint={{
          id:'1',
          title: 'work',
          latitude: 1,
          longitude: 2
        }}
      />
    </RadioGroup>
  )
}
