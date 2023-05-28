import React, { useState } from 'react';
import Navbar from './Navbar';
import './Hero.css';
import bacc from '../images/restaurant-1.jpg';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { ABOUT_ROUTE, MENU_ROUTE } from '../utils/consts';
const Hero = () => {
	const [show, setShow] = useState(false);
	const toggle = () => {
		setShow(!show);
	};

	return (
		<div className="container">
		<div className="herainer"  >
		
			<div className="content">
				<div className="contentItems">
					<h1 className="navHead" id="top">Вкусные и необычные блюда</h1>
					<p>

					Полное меню предлагается в течение всего дня и до 10 вечера.
					</p>
									</div>
			</div>
			</div>
		</div>
	
	);
};

export default Hero;
