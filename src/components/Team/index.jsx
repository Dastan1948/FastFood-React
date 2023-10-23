import React from 'react'
import teamList from '../../helpers/teamList'
import TeamCart from '../TeamCart'

const Team = () => {
	return (
		<div className='team'>
			<h1>
				Our<span>Team</span>
			</h1>
			<div className='team_box'>
				{
          teamList.map(team => (
            <TeamCart key={team.id} img={team.img} />
          ))
        }
				
			</div>
		</div>
	)
}

export default Team
