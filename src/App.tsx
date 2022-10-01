import { useSelector } from 'react-redux'
import { Wrapper, ProgressBar } from './components'
import { getData } from './redux/slices/dataSlice'

const App = (): JSX.Element => {
  const data = useSelector(getData)

  return (
    <Wrapper>
      <ProgressBar 
        width={600} 
        height={20}
        data={data}
      />
    </Wrapper>
  )
}

export default App
