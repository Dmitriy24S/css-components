import { RefObject, useEffect } from 'react'
import styles from '../components/ButtonRipple/ButtonRipple2.module.scss'

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
      // elementCurrent.classList.add('ripple-container')
      elementCurrent.classList.add(styles['rippleContainer'])
    }

    const applyStyles = (e: MouseEvent) => {
      console.log('e', e)
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

    const handleClick = (event: MouseEvent) => {
      console.log('event', event)

      // elementCurrent.classList.remove('active')
      elementCurrent.classList.remove(styles['active'])
      applyStyles(event)
      // elementCurrent.classList.add('active')
      elementCurrent.classList.add(styles['active'])
    }

    applyContainerProperties()

    elementCurrent.addEventListener('mouseup', handleClick)

    return () => {
      elementCurrent.removeEventListener('mouseup', handleClick)
    }
  }, [element, size, color, duration])
}
