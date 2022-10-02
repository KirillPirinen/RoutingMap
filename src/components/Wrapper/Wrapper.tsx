import * as React from 'react'
import { PaperStyled } from './Wrapper.styles'

type Props = {
  children?: React.ReactNode
}

export const Wrapper: React.FC<Props> = ({ children }) => (
  <PaperStyled elevation={3}>
    {children}
  </PaperStyled>
)
