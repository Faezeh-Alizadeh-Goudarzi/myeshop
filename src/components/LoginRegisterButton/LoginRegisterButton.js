import React, { useEffect, useState } from 'react'
import {BsPersonFill} from 'react-icons/bs';
import styles from './LoginRegisterButton.module.scss'
const LoginRegisterButton = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)
  useEffect(() => {
    console.log('use effect ejra shod')
  }, [])
 
  return (
    <div className={`${styles.outerContainer}`}>
      <a href='#'>
        <div>
        {
        isUserLoggedIn==false ? <p>ورود/ثبت نام</p> : <p>مشاهده حساب کاربری</p>
      }
     
      <BsPersonFill size='1.5em' color='#555'/>
      </div>
      
        </a>
         
    </div>
  )
}

export default LoginRegisterButton