import React from 'react'
import { useDispatch } from 'react-redux'
import { addItem, minusCount, removeItem } from '../store/slices/cartSlice'

const OrderCart = ({ food }) => {
	const dispatch = useDispatch()

	const handleDelete = e => {
		if (window.confirm('Вы правда хотите удалить товар?')) {
			dispatch(removeItem(food.id))
		}
	}

	return (
		<div className='menu_card'>
			<div className='menu_image'>
				<img src={food.img} />
			</div>
			<div className='small_card'>
				<i className='fa-solid fa-xmark' onClick={handleDelete} />
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
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						gap: 30,
						alignItems: 'center',
					}}
				>
					<button
						disabled={food.count > 0 ? false : true}
						className='menu_btn-minus'
						onClick={() => dispatch(minusCount(food.id))}
					>
						-
					</button>
					<i>{food.count > 0 ? food.count : 0}</i>
					<button
						className='menu_btn-plus'
						onClick={() => dispatch(addItem({ id: food.id }))}
					>
						+
					</button>
				</div>
			</div>
		</div>
	)
}

export default OrderCart
