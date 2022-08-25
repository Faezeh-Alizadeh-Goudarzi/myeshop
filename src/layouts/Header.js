import React from 'react'
import ShoppingCartButton from '../components/ShoppingCartButton/ShoppingCartButton';
import LoginRegisterButton from '../components/LoginRegisterButton/LoginRegisterButton';
import Logo from '../components/Logo/Logo';
import SearchBox from '../components/Searchbox/SearchBox';
import headerImage from '../assets/image/header-image.jpg';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div>
        <Logo/>
      <SearchBox/>
      <ShoppingCartButton/>
      <LoginRegisterButton/>
      <img className={`${styles.imageBar}`} src={headerImage} alt="nothing" />
    </div>
  )
}

export default Header