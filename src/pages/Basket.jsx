import React, { useContext, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import BasketEmpty from '../components/BasketEmpty'
import OrderCart from '../components/OrderCart'
import { useAuth } from '../context/AuthContextProvider'
import { clearItems } from '../store/slices/cartSlice'

const Basket = () => {
	const { items, totalPrice } = useSelector(state => state.cart)
	const dispatch = useDispatch()

	const { success } = useAuth()

	const {searchValue} = useSelector(state => state.cart)

	const handleClearItems = () => {
		if (window.confirm('Вы правда хотите очистить корзину?')) {
			dispatch(clearItems())
		}
	}

	const handleDelivery = () => {
		if (!success) {
			return alert('Нужно авторизоваться')
		}
		return alert('Доставка еще не готова')
	}

	if (items.length === 0) {
		return <BasketEmpty />
	}

	return (
		<div className='menu'>
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
				<button onClick={handleDelivery}>Order</button>
			</div>
		</div>
	)
}

export default Basket
