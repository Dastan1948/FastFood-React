import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { setItems } from '../../store/slices/cartSlice'
import styles from './SearchBar.module.scss'

const SearchBar = ({ handleOpenSearch }) => {
	const { searchValue } = useSelector(state => state.cart)
	const dispatch = useDispatch()

	const onChangeValue = e => {
		dispatch(setItems(e.target.value))
	}

	return (
		<div className={styles.box}>
			<input
				type='text'
				placeholder='Search Menu'
				onChange={e => onChangeValue(e)}
				value={searchValue}
			/>
			<i className='fa-solid fa-xmark' onClick={handleOpenSearch}></i>
		</div>
	)
}

export default SearchBar
