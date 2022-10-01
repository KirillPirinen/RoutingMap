import styled from "@emotion/styled"
import { SECTION_WIDTH } from "./constants"
import type { ProgressBarProps } from './ProgressBar'

type MainWrapperProps = {
  $width: number
  $height: number
}

type SectionProps = {
  $color: string
}

export const MainWrapper = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const BarWrapper = styled.div<MainWrapperProps>(({ $width, $height }) => `
  width: ${$width}px;
  height: ${$height}px;
  display: flex;
  justify-content: space-between;
`)

export const Bar = styled.div<SectionProps>(({ $color }) => `
  width: ${SECTION_WIDTH}px;
  height: 100%;
  background-color: ${$color};
  border-radius: 6px;
`)

export const LegendWrapper = styled.div`
  display: flex;
`

export const Status = styled.div<SectionProps>(({ $color }) => `
  &::before {
    content: " ";
    display:inline-block;
    background-color: ${$color};
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 5px;
  }
  margin: 10px 10px 0 0;
`)
