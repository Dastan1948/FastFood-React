import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { MenuAPI } from '../../consts/API'
import Categories from '../Categories'
import MenuCart from '../MenuCart'

const Menu = () => {
	const [data, setData] = useState([])
	const [select, setSelect] = useState(1)

	const { searchValue } = useSelector(state => state.cart)

	useEffect(() => {
		axios
			.get(`${MenuAPI}${select}`)
			.then(res => {
				setData(res.data)
			})
			.catch(err => {
				console.log(err)
			})
		window.scrollTo(0, 0)
	}, [select])

	return (
		<div className='menu' id='Menu'>
			<h1>
				Our<span>Menu</span>
			</h1>
			<Categories select={select} setSelect={setSelect} />
			<div className='menu_box'>
				{data
					.filter(value => {
						if (value.name.toLowerCase().includes(searchValue.toLowerCase())) {
							return true
						}
						return false
					})
					.map(el => (
						<MenuCart key={el.id} food={el} />
					))}
			</div>
		</div>
	)
}

export default Menu
