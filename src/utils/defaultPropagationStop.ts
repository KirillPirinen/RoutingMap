
type StopableEvent = {  
  stopPropagation: () => void
}

export const defaultPropagationStop = (e: StopableEvent, fn?: () => void) => {
  e.stopPropagation()
  fn?.()
}
