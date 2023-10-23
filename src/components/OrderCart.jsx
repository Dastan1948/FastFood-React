import React from 'react'

const OrderCart = ({food, handleDelete}) => {
  return (
    <div className='menu_card'>
			<div className='menu_image'>
				<img src={food.img} />
			</div>
			<div className='small_card'>
      <i className="fa-solid fa-xmark" onClick={() => handleDelete(food.id)} />
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
			</div>
		</div>
  )
}

export default OrderCart