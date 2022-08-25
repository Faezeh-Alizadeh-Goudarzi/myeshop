import React from 'react'
import MyLogo from '../../assets/image/logo.png'
import styles from './Logo.module.scss'

const Logo = () => {
  return (
    <div>
        <div className={`${styles.logoContainer}`}>
        <img src={MyLogo} alt="MyBurger" />
        </div>
    </div>
  )
}

export default Logo