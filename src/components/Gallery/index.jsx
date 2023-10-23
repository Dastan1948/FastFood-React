import React from 'react'
import galleryList from '../../helpers/galleryList.js'
import { Link } from 'react-router-dom'

const Gallery = () => {
	return (
		<div className='gallary' id='Gallery'>
			<h1>
				Our<span>Gallery</span>
			</h1>
			<div className='gallary_image_box'>
				{galleryList.map(gallery => (
					<div className='gallary_image' key={gallery.id}>
						<img src={gallery.img} />
						<h3>Food</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
							sint eveniet laboriosam
						</p>
						<Link to='/order' className='gallary_btn'>
							Order Now
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}

export default Gallery
