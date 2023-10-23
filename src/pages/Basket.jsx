import React, { useEffect, useState } from 'react'

import axios from 'axios'
import OrderCart from '../components/OrderCart'
import { BasketAPI } from '../consts/API'

const Basket = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		axios
			.get(BasketAPI)
			.then(res => {
				setData(res.data)
			})
			.catch(err => console.log(err))
	}, [])
	

	const handleDelete = (id) => {
    axios.delete(`${BasketAPI}/${id}`)

		location.reload()
  }
	

	return (
		<div className='menu'>
			<h1>
				<span>Корзина</span>
			</h1>
			<div className='menu_box'>
				{data.map(el => (
					<OrderCart key={el.id} food={el} handleDelete={handleDelete} />
				))}
			</div>
			<div className='order_delivery'>
				<button>
					Order
				</button>
			</div>
		</div>
	)
}

export default Basket
