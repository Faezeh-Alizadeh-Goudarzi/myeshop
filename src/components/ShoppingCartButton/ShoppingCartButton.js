import React from 'react'
import { GrCart} from 'react-icons/gr';
import styles from './ShoppingCartButton.module.scss' ;

const ShoppingCartButton = () => {
  return (
    <div className={`${styles.outerContainer}`}>
       <div className={`${styles.innerContainer}`}>
        <a href='#'>
        <GrCart size="1.5em" color='#555' />
        </a>
        </div> 
    </div>
  )
}

export default ShoppingCartButton