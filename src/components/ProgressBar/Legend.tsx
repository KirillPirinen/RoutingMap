import { Status } from "./ProgressBar.styles"

type LegendProps = {
  name: string
  color: string
  percentage: number
}

export const Legend: React.FC<LegendProps> = ({ name, color, percentage }) => {
  return (
    <Status $color={color}>
      {`${name} ${percentage.toFixed(2)}%`}
    </Status>
  )
}
