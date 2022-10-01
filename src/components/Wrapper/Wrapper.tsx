import * as React from 'react'
import { PaperStyled, WrapperStyled } from './Wrapper.styles'

type Props = {
  children?: React.ReactNode
}

export const Wrapper: React.FC<Props> = ({ children }) => (
  <WrapperStyled>
    <PaperStyled elevation={3}>
      {children}
    </PaperStyled>
  </WrapperStyled>
)
