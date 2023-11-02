import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import {
	REACT_FIREBASE_API_KEY,
	REACT_FIREBASE_APP_ID,
	REACT_FIREBASE_AUTH_DOMAIN,
	REACT_FIREBASE_MESSAGING_SENDER_ID,
	REACT_FIREBASE_PROJECT_ID,
	REACT_FIREBASE_STORAGE_BUCKET,
} from '../../firebaseKeys'

const firebaseConfig = {
	apiKey: REACT_FIREBASE_API_KEY,
	authDomain: REACT_FIREBASE_AUTH_DOMAIN,
	projectId: REACT_FIREBASE_PROJECT_ID,
	storageBucket: REACT_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: REACT_FIREBASE_MESSAGING_SENDER_ID,
	appId: REACT_FIREBASE_APP_ID,
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)

export default app
