import React, { useState } from 'react'

import bg1 from '../assets/auth-img/bg-01.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContextProvider'

const SignUp = () => {
  const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState('')

  const navigate = useNavigate()

  const {signUp} = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
		try {
			await signUp(email, password)
      navigate('/signIn')
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
					<form className='login100-form validate-form flex-sb flex-w' onSubmit={handleSubmit}>
          <span className='login100-form-title p-b-53'>Sign Up</span>
          {error && <span className='login100-form-title p-b-53'>{error}</span>}
							<div className='p-t-31 p-b-9'>
								<span className='txt1'>Email</span>
							</div>
						<div
							className='wrap-input100 validate-input'
							data-validate='Username is required'
						>
							<input className='input100' type='email' name='email' onChange={e => setEmail(e.target.value)} />
							<span className='focus-input100' />
						</div>
						<div className='p-t-13 p-b-9'>
							<span className='txt1'>Password</span>
						</div>
						<div
							className='wrap-input100 validate-input'
							data-validate='Password is required'
						>
							<input className='input100' type='password' name='pass' onChange={e => setPassword(e.target.value)} />
							<span className='focus-input100' />
						</div>
						<div className='container-login100-form-btn m-t-17'>
							<button className='login100-form-btn'>Sign Up</button>
						</div>
						<div className='w-full text-center p-t-55'>
							<span className='txt2'>member?</span>
							<Link to='/signIn' className='txt2 bo1'>
								Sign In now
							</Link>
						</div>
					</form>
				</div>
			</div>
		</div>
  )
}

export default SignUp