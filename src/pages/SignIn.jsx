import React, { useState } from 'react'

import '../styles/Auth.scss'

import GoogleButton from 'react-google-button'
import { Link, useNavigate } from 'react-router-dom'
import bg1 from '../assets/auth-img/bg-01.jpg'
import { useAuth } from '../context/AuthContextProvider'

const SignIn = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

	const { googleSignIn, signIn, successAuth } = useAuth()

	const navigate = useNavigate()

	const handleSubmit = async e => {
		e.preventDefault()
		setError('')
		try {
			await signIn(email, password)
			successAuth(true)
			navigate('/')
		} catch (error) {
			setError(error.message)
		}
	}

	const handleGoogleSignIn = async e => {
		e.preventDefault()
		try {
			await googleSignIn()
			successAuth(true)
			navigate('/')
		} catch (error) {
			setError(error.message)
		}
	}

	return (
		<div className='limiter'>
			<div
				className='container-login100'
				style={{ backgroundImage: `url(${bg1})` }}
			>
				<div className='wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33'>
					<form
						className='login100-form validate-form flex-sb flex-w'
						onSubmit={handleSubmit}
					>
						<span className='login100-form-title p-b-53'>Sign In With</span>
						<div className='special'>
							<GoogleButton onClick={handleGoogleSignIn} />
							{error && (
								<span className='login100-form-title p-b-10 p-t-40'>{error}</span>
							)}
							<div className='p-t-31 p-b-9'>
								<span className='txt1'>Email</span>
							</div>
						</div>
						<div
							className='wrap-input100 validate-input'
							data-validate='Username is required'
						>
							<input
								className='input100'
								type='email'
								name='email'
								onChange={e => setEmail(e.target.value)}
							/>
							<span className='focus-input100' />
						</div>
						<div className='p-t-13 p-b-9'>
							<span className='txt1'>Password</span>
						</div>
						<div
							className='wrap-input100 validate-input'
							data-validate='Password is required'
						>
							<input
								className='input100'
								type='password'
								name='pass'
								onChange={e => setPassword(e.target.value)}
							/>
							<span className='focus-input100' />
						</div>
						<div className='container-login100-form-btn m-t-17'>
							<button className='login100-form-btn'>Sign In</button>
						</div>
						<div className='w-full text-center p-t-55'>
							<span className='txt2'>Not a member?</span>
							<Link to='/signUp' className='txt2 bo1'>
								Sign up now
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default SignIn
