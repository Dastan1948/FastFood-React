import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Basket from '../pages/Basket'
import Home from '../pages/Home'
import Menus from '../pages/Menus'
import Orders from '../pages/Orders'
import Profile from '../pages/Profile'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

const Router = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='' element={<Home />} />
					<Route path='menu' element={<Menus />} />
					<Route path='order' element={<Orders />} />
					<Route path='basket' element={<Basket />} />
					<Route path='signIn' element={<SignIn />} />
					<Route path='signUp' element={<SignUp />} />
					<Route path='profile' element={<Profile />} />

					<Route
						path='*'
						element={
							<h1
								style={{
									margin: '180px auto',
									textAlign: 'center',
									fontSize: 48,
								}}
							>
								Page Not Found
							</h1>
						}
					/>
				</Route>
			</Routes>
		</>
	)
}

export default Router
