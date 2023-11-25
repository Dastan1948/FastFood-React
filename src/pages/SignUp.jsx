import React, { useState } from 'react'

import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContextProvider'

import '../styles/SignUp.scss'

const SignUp = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const { signUp } = useAuth()

	const handleSubmit = async e => {
		e.preventDefault()
		if (!email || !password) {
			return alert('Нужно заполнить все поля')
		}
		setError('')
		try {
			await signUp(email, password)
		} catch (error) {
			setError(error.message)
		}
	}

	return (
		<>
			<Container
				style={{ maxWidth: 555, padding: '73.5px 0', margin: '0 auto' }}
			>
				<Row>
					<Col>
						<div className='p-4 box'>
							<h2 className='mb-3 text-center' style={{ fontSize: 36 }}>
								Sign Up
							</h2>
							{error && (
								<Alert variant='danger' style={{ marginBottom: 10 }}>
									{error}
								</Alert>
							)}
							<Form onSubmit={handleSubmit}>
								<Form.Group className='mb-3' controlId='formBasicEmail'>
									<Form.Control
										type='email'
										style={{ width: 350 }}
										placeholder='Email address'
										onChange={e => setEmail(e.target.value)}
									/>
								</Form.Group>

								<Form.Group className='mb-3' controlId='formBasicPassword'>
									<Form.Control
										type='password'
										style={{ width: 350 }}
										placeholder='Password'
										onChange={e => setPassword(e.target.value)}
									/>
								</Form.Group>

								<div
									className='d-grid gap-2'
									style={{ width: 200, margin: '0 auto' }}
								>
									<Button variant='primary' type='Submit'>
										Sign Up
									</Button>
								</div>
							</Form>
						</div>
						<div className='p-4 box mt-3 text-center'>
							Already have an account? <Link to='/signIn'>Sign In</Link>
						</div>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default SignUp
