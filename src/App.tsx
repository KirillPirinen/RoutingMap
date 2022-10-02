import { useState } from 'react'
import { Wrapper, OrderTable, Routing } from './components'
import { Box, Divider } from '@mui/material'
import HeightIcon from '@mui/icons-material/Height'

const App = (): JSX.Element => {
  const [width, setWidth] = useState(800)

  const resizeHandler = (e: any) => {
    if(e.clientX) {
      setWidth(e.clientX)
    }
  }

  return (
    <Wrapper>
      <Box sx={{ width: '50%', maxWidth: width }}> 
        <OrderTable />
      </Box>
      <Divider
        draggable
        orientation="vertical" 
        flexItem 
        sx={{ cursor: 'col-resize', marginLeft: 2, marginRight: 2 }}
        onDrag={resizeHandler}
      >
        <HeightIcon sx={{ 
            transform:'rotate(90deg);', 
            width: 15, 
            height: 15 
          }} 
        />
      </Divider>
      <Box sx={{ flexBasis: '50%', flexGrow:1, marginLeft: '3px' }}>
        <Routing />
      </Box> 
    </Wrapper>  
  )
}

export default App
