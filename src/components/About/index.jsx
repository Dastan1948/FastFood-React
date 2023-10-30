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
							Получить свежую
							<br />
							<span>Еду </span>
							простым
							<br />
							 способом
						</h1>
					</div>
					<div className='main_image'>
						<img src={mainImg} />
					</div>
				</div>
				<p>
					Прежде всего, понимание сути ресурсосберегающих технологий
					предопределяет высокую востребованность вывода текущих активов.
					Значимость этих проблем настолько очевидна, что курс на
					социально-ориентированный национальный проект выявляет срочную
					потребность прогресса профессионального сообщества. Как уже
					неоднократно упомянуто, акционеры крупнейших компаний, которые
					представляют собой яркий пример континентально-европейского типа
					политической культуры, будут подвергнуты целой серии независимых
					исследований.
				</p>
				<div className='main_btn'>
					<Link to='/order'>Заказать</Link>
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
