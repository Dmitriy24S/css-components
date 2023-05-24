import { useRef } from 'react'
import { useRippleAnimation } from '../../hooks/useRippleAnimation'
import styles from './ButtonRipple.module.scss'
// import styles2 from './ButtonRipple2.module.scss'

const ButtonRipple2 = () => {
  const buttonContainerRef = useRef<HTMLDivElement>(null)

  useRippleAnimation(buttonContainerRef)

  return (
    <div ref={buttonContainerRef} className={styles.buttonContainer}>
      <button
        className={styles.buttonRipple}
        onClick={() => {
          console.log('click button2')
        }}
      >
        Button Ripple #2
      </button>
    </div>
  )
}

export default ButtonRipple2
