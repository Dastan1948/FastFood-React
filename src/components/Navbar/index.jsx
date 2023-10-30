import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.png'
import { searchContext } from '../../context/SearchContextProvider'
import SearchBar from '../SearchBar'
import { useSelector } from 'react-redux'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const { setSearchValue } = useContext(searchContext)

	const handleOpenSearch = e => {
		setIsOpen(!isOpen)
		setSearchValue('')
	}

	const {items} = useSelector(state => state.cart)
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
					<li>
						<a href='/#About'>About</a>
					</li>
					<li>
						<Link to='/menu'>Menu</Link>
					</li>
					<li>
						<a href='/#Gallery'>Gallery</a>
					</li>
					<li>
						<a href='/#Review'>Review</a>
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
				</div>
			</nav>
		</section>
	)
}

export default Navbar
