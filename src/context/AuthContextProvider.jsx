import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from 'firebase/auth'
import { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../configs/firebase'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
	const [user, setUser] = useState('')
	const [success, setSuccess] = useState(false)

	const signUp = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	const signIn = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password)
	}

	const logOut = () => {
		localStorage.setItem('user', JSON.stringify(false))
		return signOut(auth)
	}

	const googleSignIn = () => {
		const googleAuthProvider = new GoogleAuthProvider()
		return signInWithPopup(auth, googleAuthProvider)
	}

	const successAuth = (bool) => {
		setSuccess(bool)
	}

	const saveLocalStorage = () => {
		localStorage.setItem('user', JSON.stringify(true))
	}

	const value = {
		signUp,
		signIn,
		logOut,
		googleSignIn,
		successAuth,
		success,
		setSuccess,
		saveLocalStorage
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser)
		})

		return () => {
			unsubscribe()
			console.log(user);
		}
	}, [])


	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider

export function useAuth() {
	return useContext(AuthContext)
}
