import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import SearchContextProvider from './context/SearchContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<SearchContextProvider>
			<App />
		</SearchContextProvider>
	</BrowserRouter>
)
