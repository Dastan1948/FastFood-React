import React, { useEffect, useState } from 'react'

import orderImg from '../../assets/img/order_image.png'
import { useNavigate } from 'react-router-dom'

const INIT_STATE = {
  name: '',
  email: '',
  number: '',
  much: '',
  order: '',
  address: ''
}

const Order = () => {
  const [values, setValues] = useState(INIT_STATE)

  const navigate = useNavigate()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!values.name || !values.email || !values.address || !values.much || !values.number || !values.order) {
      alert('Заполните все поля')
      return
    }

    alert('Успешно отправлено')

    setValues(INIT_STATE)
  }

	return (
		<div className='order' id='Order'>
			<h1>
				<span>Order</span>Now
			</h1>
			<div className='order_main'>
				<div className='order_image'>
					<img src={orderImg} />
				</div>
				<form action='#' onSubmit={handleSubmit}>
					<div className='input'>
						<p>Name</p>
						<input type='text' placeholder='you name' onChange={e => setValues({...values, name: e.target.value})} value={values.name} />
					</div>
					<div className='input'>
						<p>Email</p>
						<input type='email' placeholder='you email' onChange={e => setValues({...values, email: e.target.value})} value={values.email} />
					</div>
					<div className='input'>
						<p>Number</p>
						<input placeholder='you number' onChange={e => setValues({...values, number: e.target.value})} value={values.number} />
					</div>
					<div className='input'>
						<p>How Much</p>
						<input type='number' placeholder='how many order' onChange={e => setValues({...values, much: e.target.value})} value={values.much} />
					</div>
					<div className='input'>
						<p>You Order</p>
						<input placeholder='food name' onChange={e => setValues({...values, order: e.target.value})} value={values.order} />
					</div>
					<div className='input'>
						<p>Address</p>
						<input placeholder='you Address' onChange={e => setValues({...values, address: e.target.value})} value={values.address} />
					</div>
					<button className='order_btn'>
						Order
					</button>
          <button className='order_btn' onClick={e => navigate('/')}>
            Back to Home
          </button>
				</form>
			</div>
		</div>
	)
}

export default Order
