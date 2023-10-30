import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import SearchContextProvider from './context/SearchContextProvider.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
	<Provider store={store}>
		<SearchContextProvider>
			<App />
		</SearchContextProvider>
		</Provider>
	</BrowserRouter>
)
