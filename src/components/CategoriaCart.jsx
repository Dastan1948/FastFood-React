import React from 'react'

const CategoriaCart = ({info, ...rest}) => {

  return (
    <button {...rest}>
			<div>
				<img src={info.img} alt={info.title} />
			</div>
			<div>
				<p>{info.title}</p>
			</div>
		</button>
  )
}

export default CategoriaCart