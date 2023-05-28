import React, { useState } from 'react';
// import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars } from 'react-icons/fa';
import { ABOUT_ROUTE, MENU_ROUTE, CAFE_ROUTE } from '../utils/consts';

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
		<div className="container">
			{/* <Navbar toggle={toggle}></Navbar> */}
			{/* <Sidebar show={show} toggle={toggle}></Sidebar> */}
			<div className="content">
				<div className="contentItems">
					<h1 className="navHead" id="top">Вкусные и необычные блюда</h1>
					<p>

					Полное меню предлагается в течение всего дня и до 10 вечера.
					</p>
					<Link to={ABOUT_ROUTE} className="sideLink">
					{/* О нас */}
				</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
