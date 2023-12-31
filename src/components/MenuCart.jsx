import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addItem } from '../store/slices/cartSlice'
import ModalAdd from './ModalAdd'

const MenuCart = ({ food }) => {
	const [isOpen, setIsOpen] = useState(false)

	const dispatch = useDispatch()

	const addBasket = async () => {
		try {
			let obj = {
				id: food.id,
				img: food.img,
				name: food.name,
				text: food.text,
				price: food.price,
				star: food.star,
				count: 1,
			}

			dispatch(addItem(obj))

			setIsOpen(true)
		} catch (error) {
			// Обработка ошибок
			console.error('Произошла ошибка:', error)
		}
	}

	if (isOpen) {
		setTimeout(() => {
			setIsOpen(false)
			console.log('Modal closed after 500 ms')
		}, 500)
	}

	return (
		<div className='menu_card'>
			{isOpen && <ModalAdd title='Товар успешно добавлен' />}
			<div className='menu_image'>
				<img src={food.img} />
			</div>
			<div className='small_card'>
				<i className='fa-solid fa-cart-shopping' onClick={addBasket} />
			</div>
			<div className='menu_info'>
				<h2>{food.name}</h2>
				<p>{food.text}</p>
				<h3>{food.price} сом</h3>
				<div className='menu_icon'>
					{[...new Array(food.star)].map((el, i) => (
						<i key={i} className='fa-solid fa-star' />
					))}
				</div>
				<Link to='/order' className='menu_btn'>
					Order Now
				</Link>
			</div>
		</div>
	)
}

export default MenuCart
