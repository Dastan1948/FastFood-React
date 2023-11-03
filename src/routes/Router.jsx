import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Basket from '../pages/Basket'
import Home from '../pages/Home'
import Menus from '../pages/Menus'
import Orders from '../pages/Orders'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import MainLayout from '../layouts/MainLayout'

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

					<Route path='*' element={<h1>Not Found</h1>} />
				</Route>
			</Routes>
		</>
	)
}

export default Router
