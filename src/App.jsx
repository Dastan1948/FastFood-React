import Navbar from './components/Navbar'

import './App.scss'
import Router from './routes/Router'
import Footer from './components/Footer'
import { useEffect } from 'react'

function App() {
	return (
		<>
			<Navbar />
			<Router />
			<Footer />
		</>
	)
}

export default App
