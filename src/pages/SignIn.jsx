import React, { useEffect, useState } from 'react'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'
import GoogleButton from 'react-google-button'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContextProvider'

import { useSelector } from 'react-redux'
import '../styles/SignIn.scss'

const SignIn = () => {
	const { userInfo } = useSelector(state => state.cart)

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const { googleSignIn, signIn } = useAuth()

	const navigate = useNavigate()

	const handleSubmit = async e => {
		e.preventDefault()
		if (!name || !email || !password) {
			return alert('Нужно заполнить все поля')
		}
		setError('')
		try {
			await signIn(email, password, name)
		} catch (error) {
			setError(error.message)
		}
	}

	const handleGoogleSignIn = async e => {
		e.preventDefault()
		try {
			await googleSignIn()
		} catch (error) {
			setError(error.message)
		}
	}

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])

	if (userInfo) {
		return <Navigate to='/profile' />
	}

	return (
		<>
			<Container
				style={{ maxWidth: 555, padding: '33.5px 0', margin: '0 auto' }}
			>
				<Row>
					<Col>
						<div className='p-4 box'>
							<h2 className='mb-3 text-center' style={{ fontSize: 36 }}>
								Sign In
							</h2>
							{error && (
								<Alert variant='danger' style={{ marginBottom: 10 }}>
									{error}
								</Alert>
							)}
							<Form onSubmit={handleSubmit}>
								<Form.Group className='mb-3' controlId='formBasicName'>
									<Form.Control
										type='text'
										style={{ width: 350 }}
										placeholder='Create a Name'
										value={name}
										onChange={e => setName(e.target.value)}
									/>
								</Form.Group>

								<Form.Group className='mb-3' controlId='formBasicEmail'>
									<Form.Control
										type='email'
										style={{ width: 350 }}
										placeholder='Email address'
										value={email}
										onChange={e => setEmail(e.target.value)}
									/>
								</Form.Group>

								<Form.Group className='mb-3' controlId='formBasicPassword'>
									<Form.Control
										type='password'
										style={{ width: 350 }}
										placeholder='Password'
										value={password}
										onChange={e => setPassword(e.target.value)}
									/>
								</Form.Group>

								<div
									className='d-grid gap-2'
									style={{ width: 200, margin: '0 auto' }}
								>
									<Button variant='primary' type='Submit'>
										Sign In
									</Button>
								</div>
							</Form>
							<div style={{ marginTop: 30 }}>
								<GoogleButton
									className='g-btn'
									style={{ margin: '0 auto' }}
									type='dark'
									onClick={handleGoogleSignIn}
								/>
							</div>
						</div>
						<div className='p-4 box mt-3 text-center'>
							Don't have an account? <Link to='/signUp'>Sign Up</Link>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default SignIn
