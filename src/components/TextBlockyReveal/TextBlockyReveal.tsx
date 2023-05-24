import { useState } from 'react'
import styles from './TextBlockyReveal.module.scss'

const TextBlockyReveal = () => {
  // const [animate, setAnimate] = useState(false)
  const [key, setKey] = useState(1)
  const updateKey = () => {
    setKey((prevKey) => prevKey + 1)
  }

  return (
    <div className='container'>
      <h4
        key={key}
        // className={[styles.textBlockyReveal, animate ? styles.animate : ''].join(' ')}
        className={[styles.textBlockyReveal].join(' ')}
        // onClick={() => setAnimate(!animate)}
        onClick={updateKey}
      >
        <span>Here</span>
        <span>we</span>
        <span>goooooo!</span>
      </h4>
    </div>
  )
}

export default TextBlockyReveal
