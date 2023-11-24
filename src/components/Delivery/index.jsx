import React, { useState } from 'react'

import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import styles from './Delivery.module.scss'

const Delivery = ({ onClickOpen }) => {
	const [send, setSend] = useState(false)

	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
	} = useForm({
		mode: 'onBlur',
	})

	const onSubmit = data => {
		console.log(data)

		setSend(true)

		setTimeout(() => {
			onClickOpen()
		}, 2000)
	}

	return (
		<div className={styles.modal}>
			<div className={styles['modal__dialog']}>
				{!send ? (
					<div className={styles['modal__content']}>
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className={styles['modal__close']} onClick={onClickOpen}>
								×
							</div>
							<div className={styles['modal__title']}>
								Мы свяжемся с вами как можно быстрее!
							</div>
							<div style={{ height: 10, textAlign: 'center' }}>
								{errors?.name && (
									<p style={{ color: 'red' }}>
										{errors?.name?.message || 'Error!'}
									</p>
								)}
							</div>
							<input
								placeholder='Ваше имя'
								name='name'
								type='text'
								className={styles['modal__input']}
								{...register('name', {
									required: 'Поле обязательно нужно заполнить',
									minLength: {
										value: 2,
										message: 'Нужно минимум 2 символа',
									},
								})}
							/>
							<div style={{ height: 10, textAlign: 'center' }}>
								{errors?.email && (
									<p style={{ color: 'red' }}>
										{errors?.email?.message || 'Error!'}
									</p>
								)}
							</div>
							<input
								placeholder='Ваша почта'
								name='email'
								type='email'
								className={styles['modal__input']}
								{...register('email', {
									required: 'Поле обязательно нужно заполнить',
									minLength: {
										value: 5,
										message: 'Нужно минимум 5 символа',
									},
								})}
							/>
							<div style={{ height: 10, textAlign: 'center' }}>
								{errors?.address && (
									<p style={{ color: 'red' }}>
										{errors?.address?.message || 'Error!'}
									</p>
								)}
							</div>
							<input
								placeholder='Адрес (страна, город, район, дом)'
								name='address'
								type='address'
								className={styles['modal__input']}
								{...register('address', {
									required: 'Поле обязательно нужно заполнить',
									minLength: {
										value: 4,
										message: 'Нужно минимум 4 символа',
									},
								})}
							/>
							<div style={{ height: 10, textAlign: 'center' }}>
								{errors?.phone && (
									<p style={{ color: 'red' }}>
										{errors?.phone?.message || 'Error!'}
									</p>
								)}
							</div>
							<input
								placeholder='Ваш номер телефона'
								name='phone'
								type='tel'
								className={styles['modal__input']}
								style={{ marginBottom: 20 }}
								{...register('phone', {
									required: 'Поле обязательно нужно заполнить',
									minLength: {
										value: 8,
										message: 'Нужно минимум 8 символа',
									},
								})}
							/>
							<button className={styles.btn} disabled={!isValid}>
								Отправить
							</button>
						</form>
					</div>
				) : (
					<div className={styles['modal__content']}>
						<div className={styles['modal__close']} onClick={onClickOpen}>
							×
						</div>
						<div className={styles['modal__title']}>
							Спасибо! Скоро мы с вами свяжемся
						</div>
					</div>
				)}
			</div>
		</div>
	)
}

export default Delivery
