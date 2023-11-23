import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import { setItems } from '../../store/slices/cartSlice'
import SearchBar from '../SearchBar'

const Navbar = () => {
	const [menu, setMenu] = useState(false)

	const dispatch = useDispatch()

	const location = useLocation()

	const [isOpen, setIsOpen] = useState(false)

	const handleOpenSearch = e => {
		if(location.pathname === '/menu') {
			setIsOpen(!isOpen)
			dispatch(setItems(''))
		}else {
			alert('Поиск открывается только в странице Menu и в Корзине')
			setIsOpen(false)
		}
	}

	useEffect(() => {
		if (location.pathname === '/') {
			setMenu(true)
		}

		return () => {
			setMenu(false)
		}
	})

	const { items, userInfo } = useSelector(state => state.cart)
	const totalCount = items.reduce((sum, item) => sum + item.count, 0)

	return (
		<section id='Home'>
			<nav>
				<div className='logo'>
					<Link to='/'>
						<img src={logo} alt='logo' />
					</Link>
				</div>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					{menu && (
						<>
							<li>
								<a href='/#About'>About</a>
							</li>
							<li>
								<a href='/#Gallery'>Gallery</a>
							</li>
							<li>
								<a href='/#Review'>Review</a>
							</li>
						</>
					)}
					<li>
						<Link to='/menu'>Menu</Link>
					</li>
					<li>
						<Link to='/order'>Order</Link>
					</li>
				</ul>
				<div className='icon'>
					{isOpen ? (
						<SearchBar handleOpenSearch={handleOpenSearch} />
					) : (
						<i
							className='fa-solid fa-magnifying-glass'
							onClick={handleOpenSearch}
						/>
					)}
					<Link to='/basket'>
						<div className='basket_icons'>
							<i className='fa-solid fa-cart-shopping' />
							<span>{totalCount}</span>
						</div>
					</Link>
					<Link to='/signIn'>
						{userInfo ? (
							<img
								style={{
									width: 32,
									height: 32,
									borderRadius: 9999,
								}}
								src={userInfo.image}
								alt='userLogo'
							/>
						) : (
							<i className={`fa-solid fa-user`}></i>
						)}
					</Link>
					{userInfo?.name && (
						<div
							style={{
								color: 'black',
							}}
						>
							{userInfo?.name}
						</div>
					)}
				</div>
			</nav>
		</section>
	)
}

export default Navbar
