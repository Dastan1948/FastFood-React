import React from 'react'

const TeamCart = ({img}) => {
  return (
    <div className='profile'>
					<img src={img} />
					<div className='info'>
						<h2 className='name'>Chef</h2>
						<p className='bio'>
						Никто не вправе осуждать треск разлетающихся скреп
						</p>
						<div className='team_icon'>
							<i className='fa-brands fa-facebook-f' />
							<i className='fa-brands fa-twitter' />
							<i className='fa-brands fa-instagram' />
						</div>
					</div>
				</div>
  )
}

export default TeamCart