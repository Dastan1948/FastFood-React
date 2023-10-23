import React from 'react'

const ReviewCart = ({ review }) => {
	return (
		<div className='review_card'>
			<div className='review_profile'>
				<img src={review.img} />
			</div>
			<div className='review_text'>
				<h2 className='name'>{review.name}</h2>
				<div className='review_icon'>
					{[...new Array(review.starCount)].map((_, index) => (
						<i key={index} className='fa-solid fa-star' />
					))}
				</div>
				<div className='review_social'>
					<i className='fa-brands fa-facebook-f' />
					<i className='fa-brands fa-instagram' />
					<i className='fa-brands fa-twitter' />
					<i className='fa-brands fa-linkedin-in' />
				</div>
				<p>{review.text}</p>
			</div>
		</div>
	)
}

export default ReviewCart
