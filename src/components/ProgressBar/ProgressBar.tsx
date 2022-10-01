import { MainWrapper, Bar, BarWrapper, LegendWrapper } from "./ProgressBar.styles"
import { MIN_GAP, SECTION_WIDTH } from './constants'
import { ProgressBarData } from "../../redux/types"
import { useMemo } from "react"
import { Legend } from "./Legend"

export type ProgressBarProps = {
  width: number
  height: number
  data: ProgressBarData
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ width, height, data }) => {

  const { bars, legends } = useMemo(() => {
    const filteredSections = data.filter(el => Boolean(el.value))
    const total = filteredSections.reduce((acc, el) => acc + el.value, 0)
    const sectionsCount = Math.floor(width / (MIN_GAP + SECTION_WIDTH))
    const stepWeight = Math.floor(total / sectionsCount)
    const bars = []
    const legends = []
    
    for(let section of filteredSections) {
      let current = section.value
      let j = 0
      const percentage = (section.value / total * 100)
      do {
        bars.push(<Bar key={`${j}-${section.name}`} $color={section.color} />)
        current = current - stepWeight
        j++
      } while (current > 0)
      legends.push(<Legend key={section.name} name={section.name} color={section.color} percentage={percentage} />)
    }

    return { bars, legends }
  }, [data, width])

  return (
    <MainWrapper>
      <BarWrapper $width={width} $height={height}>
        {bars}
      </BarWrapper>
      <LegendWrapper>
        {legends}
      </LegendWrapper>
    </MainWrapper>
  )
}
