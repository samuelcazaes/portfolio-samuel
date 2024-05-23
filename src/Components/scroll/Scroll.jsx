import React from 'react'
import styles from './Scroll.module.css'
import ScrollIcon from '../../Assets/icons/scroll.svg?react'
import { useState, useEffect } from 'react'

const Scroll = () => {

  const [showTopBtn, setShowTopBtn] = useState(false);
  
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 1000) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    })
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({top: 0})
  }

  return (
    <div onClick={handleScrollToTop} className={`${styles.scrollDiv} ${showTopBtn ? styles.ativado : styles.desativado}`}>
      <a href="#navbar"><ScrollIcon/></a>
    </div>
  )
}

export default Scroll