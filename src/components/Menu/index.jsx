import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MenuAPI } from '../../consts/API'
import { fetchMenus } from '../../store/slices/cartSlice'
import Categories from '../Categories'
import MenuCart from '../MenuCart'

import loadingImg from './spinner.svg'

const Menu = () => {
	const dispatch = useDispatch()
	const { searchValue, menu, status } = useSelector(state => state.cart)

	const [select, setSelect] = useState(1)

	useEffect(() => {
		dispatch(fetchMenus({ MenuAPI, select }))

		window.scrollTo(0, 0)
	}, [select])

	const menus = menu
		.filter(value => {
			if (value.name.toLowerCase().includes(searchValue.toLowerCase())) {
				return true
			}
			return false
		})
		.map(el => <MenuCart key={el.id} food={el} />)

	return (
		<div className='menu' id='Menu'>
			<h1>
				Our<span>Menu</span>
			</h1>
			<Categories select={select} setSelect={setSelect} />
			<div className='menu_box'>
				{status === 'error' ? (
					<div className='menu_box-error'>
						<h2>
							Произошла ошибка <span>😕</span>
						</h2>
						<p>
							К сожалению, не удалось получить Меню. Попробуйте повторить
							попытку позже
						</p>
					</div>
				) : (
					<>
						{status === 'loading' ? (
							<>
								<div className='menu_box-loading'>
									<img src={loadingImg} alt='loadingImg' />
									Загрузка...
								</div>
							</>
						) : (
							menus
						)}
					</>
				)}
			</div>
		</div>
	)
}

export default Menu
