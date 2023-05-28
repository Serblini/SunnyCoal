import React from 'react';
import './Cakes.css';
import { cakes } from '../data/menu';
import { NavLink, Link} from "react-router-dom";
import Slide from 'react-reveal/Reveal';
import { CAFE_ROUTE, ABOUT_ROUTE } from '../utils/consts';

const Cakes = ({ id }) => {
	return (
		<div className="cakeContainer" id={id}>
			<h1 className="cakeHeading">Наиболее популярные</h1>
			<div className="cakeWrapper">
				{cakes.slice(0, 6).map((cake, index) => (
					<Slide
						key={index}
						right={index >= 3 ? true : false}
						left={index < 3 ? true : false}
					>
						<div className="cakeCard">
							<img src={cake.img} className="cakeImg" alt={cake.alt} />
							<div className="cakeInfo">
								<div className="protTitle">{cake.title}</div>
								<div className="protDesc">{cake.desc}</div>
								<div className="cakePrice">{cake.price}</div>
								
								{/* <Link to={ABOUT_ROUTE}><div className="cakeBtn">Выбрать</div></Link> */}
							</div>
						</div>
					
						
							
					</Slide>
					
					
				)
				
				)}
				{/* <Link to={ABOUT_ROUTE}> 
				<div className="cakeBtn">Выбрать</div>
				</Link> */}
			</div>
		</div>
	);
};

export default Cakes;
