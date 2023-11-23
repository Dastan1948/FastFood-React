import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from 'firebase/auth'
import { createContext, useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { auth } from '../configs/firebase'
import { addUser, removeUser } from '../store/slices/cartSlice'

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
	const dispatch = useDispatch()
	
	const [user, setUser] = useState('')

	const signUp = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password)
	}

	const signIn = (email, password, name) => {
		return signInWithEmailAndPassword(auth, email, password).then(user => {
			dispatch(
				addUser({
					id: user.user.uid,
					name: name,
					email: user.user.email,
					image: 'https://cdn-icons-png.flaticon.com/512/6596/6596121.png'
				})
			)
		})
		.catch(error => console.log(error))
	}

	const logOut = () => {
		return signOut(auth).then(() => dispatch(removeUser()))
	}

	const googleSignIn = () => {
		const googleAuthProvider = new GoogleAuthProvider()
		return signInWithPopup(auth, googleAuthProvider)
			.then((user) => {
				dispatch(
					addUser({
						id: user.user.uid,
						name: user.user.displayName,
						email: user.user.email,
						image: user.user.photoURL,
					})
				)
			})
			.catch(error => console.log(error))
	}

	const value = {
		signUp,
		signIn,
		logOut,
		googleSignIn,
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, currentUser => {
			setUser(currentUser)
		})

		return () => {
			unsubscribe()
		}
	}, [])

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthContextProvider

export function useAuth() {
	return useContext(AuthContext)
}
