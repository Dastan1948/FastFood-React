import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import BasketEmpty from '../components/BasketEmpty'
import Delivery from '../components/Delivery'
import OrderCart from '../components/OrderCart'
import { clearItems } from '../store/slices/cartSlice'

const Basket = () => {
	const [isOpen, setIsOpen] = useState(false)

	const { items, totalPrice, userInfo } = useSelector(state => state.cart)

	const dispatch = useDispatch()
	const navigate = useNavigate()

	const { searchValue } = useSelector(state => state.cart)

	const handleClearItems = () => {
		if (window.confirm('Вы правда хотите очистить корзину?')) {
			dispatch(clearItems())
		}
	}

	const handleToggleDelivery = () => {
		if (!userInfo) {
			window.confirm('Нужно авторизоваться') ? navigate('/signIn') : null
			return
		}
		return setIsOpen(!isOpen)
	}

	if (items.length === 0) {
		return <BasketEmpty />
	}

	return (
		<div className='menu'>
			{isOpen && <Delivery onClickOpen={handleToggleDelivery} />}
			<h1>
				<span>Корзина</span>
			</h1>
			<button className='menu_clear-btn' onClick={handleClearItems}>
				Очистить корзину
			</button>
			<div className='menu_box'>
				{items
					.filter(value => {
						if (value.name.toLowerCase().includes(searchValue.toLowerCase())) {
							return true
						}
						return false
					})
					.map(el => (
						<OrderCart key={el.id} food={el} />
					))}
			</div>
			<div className='order_delivery'>
				<div className='order_delivery-total'>
					Итого: <span>{totalPrice} сомов</span>
				</div>
				<button onClick={handleToggleDelivery}>Заказать</button>
			</div>
		</div>
	)
}

export default Basket
