import { useRef } from 'react'
import { useRippleAnimation } from '../../hooks/useRippleAnimation'
import styles from './ButtonRipple.module.scss'

const ButtonRipple2 = () => {
  const buttonContainerRef = useRef<HTMLDivElement>(null)

  useRippleAnimation(buttonContainerRef)

  return (
    <div ref={buttonContainerRef} className={styles.buttonContainer}>
      <button className={styles.buttonRipple}>ButtonRipple2</button>
    </div>
  )
}

export default ButtonRipple2
