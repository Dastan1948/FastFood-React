import React, { useEffect } from 'react'
import About from '../components/About'
import Gallery from '../components/Gallery'
import Review from '../components/Review'
import Team from '../components/Team'

const Home = () => {
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [])
	return (
		<>
			<About />
			<Gallery />
			<Review />
			<Team />
		</>
	)
}

export default Home
