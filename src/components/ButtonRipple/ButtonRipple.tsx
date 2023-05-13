import { useEffect, useRef, useState } from 'react'
import styles from './ButtonRipple.module.scss'

const ButtonRipple = () => {
  // const [showRipple, setShowRipple] = useState(false)
  const ref = useRef<HTMLButtonElement>(null)
  const [ripples, setRipples] = useState<any[]>([])

  useEffect(() => {
    const button = ref.current
    // let timerId
    function handleClick(event: MouseEvent) {
      // if (timerId) {
      // clearTimeout(timerId)
      // ! nope loops repeats etc
      // }

      // console.log('click')
      const x = event.clientX - (event.target as HTMLElement).offsetLeft
      const y = event.clientY - (event.target as HTMLElement).offsetTop
      // console.log({ x, y })
      // right side buton click {x: 174, y: 35}
      // left side butotn click {x: 17, y: 28}

      const newRipple = { x, y }
      setRipples((oldRipples) => [...oldRipples, newRipple])

      // setShowRipple(true)

      // timerId =
      setTimeout(() => {
        // setShowRipple(false)
        setRipples((oldRipples) => oldRipples.filter((ripple) => ripple !== newRipple))
        // }, 1000)
      }, 400) // css  animate 500ms agina sheort to cuto ff? i no repeat? ovelrpa hz evnetloop or waht eafkm
    }

    button?.addEventListener('click', handleClick)
    return () => {
      button?.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <>
      <button
        ref={ref}
        type='button'
        // onClick={handleClick}
        className={styles.buttonRipple}
      >
        ButtonRipple
        {/* {showRipple && <span />} */}
        {ripples.map(({ x, y }, index) => (
          <span key={index} className={styles.ripple} style={{ top: y, left: x }} />
        ))}
      </button>
    </>
  )
}

export default ButtonRipple
