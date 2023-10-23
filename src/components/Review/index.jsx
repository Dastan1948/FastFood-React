import React from 'react'

import reviewList from '../../helpers/reviewList'
import ReviewCart from '../ReviewCart'

const Review = () => {
	return (
		<div className='review' id='Review'>
			<h1>
				Customer<span>Review</span>
			</h1>
			<div className='review_box'>
				{reviewList.map(review => (
					<ReviewCart key={review.id} review={review} />
				))}
			</div>
		</div>
	)
}

export default Review
