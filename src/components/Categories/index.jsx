import React, { useState } from 'react'
import CategoriaCart from '../CategoriaCart'
import categoriesList from '../../helpers/categoriesList'

import styles from './Categories.module.scss'

const Categories = ({select, setSelect}) => {

  return (
    <div className={styles.categories}>
			<div className={styles.container}>
				<div className={styles['categories_content']}>
					{categoriesList.map((element) => (
						<CategoriaCart
							key={element.id}
							info={element}
							className={`${styles.box} + ${select === element.id ? styles.active : ''}`}
              onClick={e => setSelect(element.id)}
						/>
					))}
				</div>
			</div>
		</div>
  )
}

export default Categories