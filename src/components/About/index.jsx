import React from 'react'

import { Link } from 'react-router-dom'
import foodPlate from '../../assets/img/Food-Plate.png'
import mainImg from '../../assets/img/main_img.png'

const About = () => {
	return (
		<>
			<section>
				<div className='main'>
					<div className='men_text'>
						<h1>
							Получить свежую<span>Еду</span>
							<br />
							простым способом
						</h1>
					</div>
					<div className='main_image'>
						<img src={mainImg} />
					</div>
				</div>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
					reiciendis quaerat nobis deleniti amet non inventore. Reprehenderit
					recusandae voluptatibus minus tenetur itaque numquam cum quos dolorem
					maxime. Quas, quaerat nisi. Lorem ipsum dolor sit, amet consectetur
					adipisicing elit. Cumque facilis, quaerat cupiditate nulla quibusdam
					quo sunt esse tempore inventore vel voluptate, amet laudantium
					adipisci veniam nihil quam molestiae omnis mollitia.
				</p>
				<div className='main_btn'>
					<Link to='/order'>Заказать сейчас</Link>
					<i className='fa-solid fa-angle-right' />
				</div>
			</section>

			<div className='about' id='About'>
				<div className='about_main'>
					<div className='image'>
						<img src={foodPlate} alt='Food-Plate' />
					</div>
					<div className='about_text'>
						<h1>
							<span>About</span>Us
						</h1>
						<h3>Why Choose us?</h3>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Expedita, est. Doloremque sapiente veritatis laboriosam corrupti
							optio et maxime. Ad, amet explicabo eaque labore cupiditate quasi
							nostrum nemo recusandae id quibusdam? Lorem ipsum dolor sit amet
							consectetur adipisicing elit. Doloremque ab, dolores pariatur cum
							exercitationem, illo nisi veritatis vitae ea deleniti fugiat
							quisquam tempora, accusantium corrupti excepturi optio. Inventore,
							cupiditate recusandae.
						</p>
					</div>
				</div>
				<Link to='/order' className='about_btn'>
					Order Now
				</Link>
			</div>
		</>
	)
}

export default About
