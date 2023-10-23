import React from 'react'
import { BasketAPI } from '../consts/API'
import { Link } from 'react-router-dom'

const MenuCart = ({ food, handleAddBasket }) => {

	const addBasket = (e) => {

		let obj = {
			id: Date.now(),
			img: food.img,
			name: food.name,
			text: food.text,
			price: food.price,
			star: food.star
		}

		handleAddBasket(BasketAPI, obj)

		alert('Успешно Добавлено в Корзину')
	}


	return (
		<div className='menu_card'>
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
