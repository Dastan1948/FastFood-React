import React from 'react'

import styles from './ModalAdd.module.scss'

const ModalAdd = ({title}) => {
	return (
		<>
			<div id={styles['myModal']} className={styles.modal}>
				<div className={styles['modal-content']}>
					<p>{title}</p>
				</div>
			</div>
		</>
	)
}

export default ModalAdd
