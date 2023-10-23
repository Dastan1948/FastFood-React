import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer>
			<div className='footer_main'>
				<div className='footer_tag'>
					<h2>Location</h2>
					<p>Kyrgyzstan</p>
					<p>Kazakhstan</p>
					<p>Uzbekistan</p>
					<p>Russia</p>
					<p>Turkmenistan</p>
				</div>
				<div className='footer_tag'>
					<h2>Quick Link</h2>
					<Link to='/'>Home</Link>
					<a href='/#About'>About</a>
					<Link to='/menu'>Menu</Link>
					<a href='/#Gallery'>Gallery</a>
					<Link to='/order'>Order</Link>
				</div>
				<div className='footer_tag'>
					<h2>Contact</h2>
					<a href='tel:+996000000000'>+996 000 000 000</a>
					<a href='tel:+996999999999'>+996 999 999 999</a>
					<a href='mailto:FastFood@gmail.com'>FastFood@gmail.com</a>
					<a href='mailto:NumberOneFastFood@gmail.com'>
						NumberOneFastFood@gmail.com
					</a>
				</div>
				<div className='footer_tag'>
					<h2>Follows</h2>
					<i className='fa-brands fa-facebook-f' />
					<i className='fa-brands fa-twitter' />
					<i className='fa-brands fa-instagram' />
					<i className='fa-brands fa-linkedin-in' />
				</div>
			</div>
		</footer>
	)
}

export default Footer
