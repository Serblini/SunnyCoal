import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';
import { CAFE_ROUTE } from '../utils/consts';

const Navbar = ({ toggle }) => {
	const [move, setMove] = useState(false);

	const moveNavbar = () => {
		if (window.scrollY >= window.innerHeight/40) {
			setMove(true);
		} else {
			setMove(false);
		}
	};
	window.addEventListener('scroll', moveNavbar);

	return (
		<div>
			<div className="navicon" onClick={toggle}>
				<FaBars className="icon"></FaBars>
			</div>
		<nav className={`navbar ${move ? 'move' : ''}`}>
			<Link className="navlink" to={CAFE_ROUTE}>
				<div  className="desktop" >Солнечный уголёк</div>
			</Link>
			
		</nav>
		
		</div>
	);
};

export default Navbar;
