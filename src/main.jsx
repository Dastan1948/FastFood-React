import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import AuthContextProvider from './context/AuthContextProvider.jsx'
import { store } from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Provider store={store}>
			<AuthContextProvider>
				<App />
			</AuthContextProvider>
		</Provider>
	</BrowserRouter>
)
