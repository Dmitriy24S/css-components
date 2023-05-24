import { useEffect, useRef, useState } from 'react'
import styles from './ButtonRipple.module.scss'

type Coordinates = {
  x: number
  y: number
}

const ButtonRipple1 = () => {
  // const [showRipple, setShowRipple] = useState(false)
  const ref = useRef<HTMLButtonElement>(null)
  // const [ripples, setRipples] = useState<any[]>([])
  const [ripples, setRipples] = useState<Coordinates[]>([])

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
      }, 400) // css animate 500ms
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
        onClick={() => {
          console.log('click button1')
        }}
      >
        Button Ripple #1
        {/* {showRipple && <span />} */}
        {ripples.map(({ x, y }, index) => (
          <span key={index} className={styles.ripple} style={{ top: y, left: x }} />
        ))}
      </button>
    </>
  )
}

export default ButtonRipple1
