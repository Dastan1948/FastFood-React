import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useAuth } from '../context/AuthContextProvider'
import styles from '../styles/Profile.module.scss'

const Profile = () => {
	const navigate = useNavigate()

	const { userInfo } = useSelector(state => state.cart)

	const { logOut } = useAuth()

	const handleSignOut = async () => {
		try {
			await logOut()
		} catch (error) {
			alert(error.message)
		}
	}

	if (!userInfo) {
		return <Navigate to='/signIn' />
	}

	return (
		<div className={styles.myContainer}>
			<div className={styles.innerContainer}>
				<h2 style={{ marginBottom: 20, fontSize: 36 }}>Detail of User</h2>
				<div>
					<img
						style={{
							width: 96,
							height: 96,
						}}
						src={userInfo.image}
						alt=''
					/>
				</div>
				<div>
					<strong>Nick Name: </strong> {userInfo.name}
				</div>
				<div>
					<strong>Email: </strong> {userInfo.email}
				</div>
				<div
					style={{
						width: 120,
						margin: '0 auto',
					}}
				>
					<Button
						style={{
							backgroundColor: '#007bff',
							width: '100%',
							padding: '0.5rem 1rem',
							fontSize: '1rem',
							color: '#fff',
							border: 'none',
							borderRadius: '0.25rem',
							cursor: 'pointer',
						}}
						onClick={() => handleSignOut()}
					>
						Sign Out
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Profile
