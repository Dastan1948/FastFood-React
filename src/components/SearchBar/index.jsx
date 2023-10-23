import React, { useContext } from 'react'

import styles from './SearchBar.module.scss'
import { searchContext } from '../../context/SearchContextProvider'

const SearchBar = ({handleOpenSearch}) => {
  const {searchValue, setSearchValue} = useContext(searchContext)

	return (
		<div className={styles.box}>
			<input
				type='text'
				placeholder='Search Menu'
        onChange={e => setSearchValue(e.target.value)}
        value={searchValue}
			/>
			<i className='fa-solid fa-xmark' onClick={handleOpenSearch}></i>
		</div>
	)
}

export default SearchBar
