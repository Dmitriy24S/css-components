import styles from './TextHover.module.scss'

const TextHover = () => {
  return (
    <div className='container'>
      <a href='#/' className={[styles.hoverEffect, styles.leftToRighEffect].join(' ')}>
        Hover for underline left to right
      </a>
      <a href='#/' className={[styles.hoverEffect, styles.rightToLeftEffect].join(' ')}>
        Hover for underline right to left
      </a>
      <a href='#/' className={[styles.hoverEffect, styles.outwardsEffect].join(' ')}>
        Hover for underline outwards
      </a>
      <a href='#/' className={[styles.hoverEffect, styles.outwardsEffect2].join(' ')}>
        Hover for underline outwards2
      </a>
      <a href='#/' className={[styles.hoverEffect, styles.inwardsEffect].join(' ')}>
        Hover for underline inwards
      </a>
      <a href='#/' className={[styles.hoverEffect, styles.bounceOutEffect].join(' ')}>
        Hover for underline bounce-out
      </a>
      <a href='#/' className={[styles.hoverEffect, styles.gradientEffect].join(' ')}>
        Hover for underline with moving gradient
      </a>
    </div>
  )
}

export default TextHover
