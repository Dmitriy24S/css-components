import { FC, MouseEvent, RefObject, useEffect } from 'react'

// interface Props {
//   element: HTMLElement
//   config: any
// }

// export const useRippleAnimation: FC<Props> = (element, config) => {
export const useRippleAnimation = (
  element: RefObject<HTMLDivElement>,
  config = { size: 100, color: '#fff', duration: 800 }
) => {
  const { size = 100, color = '#fff', duration = 800 } = config

  useEffect(() => {
    const elementCurrent = element.current
    if (elementCurrent === null) return

    const applyContainerProperties = () => {
      elementCurrent.classList.add('ripple-container')
    }

    const applyStyles = (e: any) => {
      const { offsetX, offsetY } = e
      const { style } = elementCurrent
      const sizeOffset = 50

      style.setProperty('--effect-duration', `${duration}ms`)
      style.setProperty('--effect-top', `${offsetY - sizeOffset}px`)
      style.setProperty('--effect-left', `${offsetX - sizeOffset}px`)
      style.setProperty('--effect-height', `${size}px`)
      style.setProperty('--effect-width', `${size}px`)
      style.setProperty('--effect-color', `${color}`)
    }

    // const handleClick = (event: MouseEvent) => {
    const handleClick = (event: any) => {
      elementCurrent.classList.remove('active')
      applyStyles(event)
      elementCurrent.classList.add('active')
    }

    applyContainerProperties()

    elementCurrent.addEventListener('mouseup', handleClick)

    return () => {
      elementCurrent.removeEventListener('mouseup', handleClick)
    }
  }, [element, size, color, duration])
}
