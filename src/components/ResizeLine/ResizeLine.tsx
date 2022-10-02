import styled from "@emotion/styled"
import { Divider } from "@mui/material"

export const ResizeLine = styled(Divider)`
  position: relative;
  padding: 0 5px;
  cursor: col-resize;
  &:after {
    content: "";
    position: absolute;
    width: 5px;
    height: 20px;
    top: 50px;
    left: -4px;
    background-color: grey;
    display: block;

  }

`
