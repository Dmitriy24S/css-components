import { useState } from 'react'
import styles from './TextMenuSlidingUnderline.module.scss'

const navItems = [
  'Home',
  'Categories',
  // 'Product',
  'About',
  //  'Menu'
]

const TextMenuSlidingUnderline = () => {
  const [activeMenuIndex, setActiveMenuIndex] = useState(0)
  const currentUnderlinePosition = activeMenuIndex * (100 / navItems.length)
  const [underlinePosition, setUnderlinePosition] = useState(currentUnderlinePosition)

  const handleListItemHover = (itemIndex: number) => {
    setUnderlinePosition(itemIndex * (100 / navItems.length))
  }

  return (
    <div className='container'>
      <ul className={styles.menuList}>
        {navItems.map((item, index) => (
          <li
            key={index}
            onMouseEnter={() => handleListItemHover(index)}
            onFocus={() => handleListItemHover(index)}
            onMouseLeave={() => handleListItemHover(activeMenuIndex)}
            onBlur={() => handleListItemHover(activeMenuIndex)}
            style={{
              width: 100 / navItems.length + '%',
            }}
          >
            <a href='#/' onClick={() => setActiveMenuIndex(index)}>
              {item}
            </a>
          </li>
        ))}
        <div
          className={styles.underline}
          style={{
            marginLeft: `${underlinePosition}%`,
            width: 100 / navItems.length + '%',
          }}
        />
        {/* // ! <ul> and <ol> must only directly contain <li>, <script> or <template> elements: List element has direct children that are not allowed: divwebhintaxe/structure  */}
      </ul>
    </div>
  )
}

export default TextMenuSlidingUnderline
