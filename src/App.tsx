
import OrderTable from './components/OrderTable/OrderTable'
import { Wrapper } from './components'
import { Box, Divider } from '@mui/material'

const App = (): JSX.Element => {
  return (
    <Wrapper>
      <Box sx={{ width: '50%' }}> 
        <OrderTable />
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box sx={{ width: '50%' }}>

      </Box> 
    </Wrapper>  
  )
}

export default App
