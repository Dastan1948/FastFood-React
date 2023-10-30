import React, { useContext } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import BasketEmpty from '../components/BasketEmpty'
import OrderCart from '../components/OrderCart'
import { searchContext } from '../context/SearchContextProvider'
import { clearItems } from '../store/slices/cartSlice'

const Basket = () => {
	const { items, totalPrice } = useSelector(state => state.cart)
	const dispatch = useDispatch()

	const { searchValue } = useContext(searchContext)

	const handleClearItems = () => {
		if (window.confirm('Вы правда хотите очистить корзину?')) {
			dispatch(clearItems())
		}
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
				<button onClick={e => alert('Пока что не готово')}>Order</button>
			</div>
		</div>
	)
}

export default Basket
