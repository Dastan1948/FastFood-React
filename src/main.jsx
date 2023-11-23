import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App.jsx'
import AuthContextProvider from './context/AuthContextProvider.jsx'
import { persistor, store } from './store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Provider store={store}>
			<PersistGate loading='loading' persistor={persistor}>
				<AuthContextProvider>
					<App />
				</AuthContextProvider>
			</PersistGate>
		</Provider>
	</BrowserRouter>
)
