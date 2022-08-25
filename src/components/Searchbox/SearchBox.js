import React from 'react'
import styles from './SearchBox.module.scss'

const SearchBox = () => {
  return (
    <div>
        <div className={`${styles.outerContainer}`}>
            <button>جست و جو</button>
            <input type='text' placeholder='...جست و جو' />
            
            

        </div>
    </div>
  )
}

export default SearchBox