import React from 'react'

import styles from './BasketEmpty.module.scss'
import { Link } from 'react-router-dom'

const BasketEmpty = () => {
  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <h2>Корзина пустая добавьте товар в странице <Link to='/menu'>
          <span className={styles['box_menu']}>
          МЕНЮ
          </span>
        </Link></h2>
        <Link to='/'>
          <button className={styles['box_btn']}>
            Вернутся на главную страницу
          </button>
        </Link>
      </div>
    </div>
  )
}

export default BasketEmpty