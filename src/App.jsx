import Navbar from './components/Navbar'

import './App.scss'
import Footer from './components/Footer'
import Auth from './pages/SignIn'
import Router from './routes/Router'

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
