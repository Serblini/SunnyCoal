import React from 'react';
import './Sidebar.css';
import './Cakes.css';

import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import { ABOUT_ROUTE, CAFE_ROUTE, MENU_ROUTE } from '../utils/consts';

const Sidebar = ({ toggle, show }) => {
	const scrollTo = (id) => {
		const element = document.getElementById(id);

		toggle();
		element.scrollIntoView({
			behavior: 'smooth',
		});
	};
	return (
		<div className={`sideContainer ${show ? 'show' : ''}`}>
			<div className="close" onClick={toggle}>
				Закрыть
			</div>
			<div className="sideMenu">
				<Link to={MENU_ROUTE} className="sideLink"
				//  onClick={() => scrollTo('menu')}
				 >
					Меню
				</Link>
			
				<Link to={ABOUT_ROUTE} className="sideLink">
					О нас
				</Link>
				<Link to={CAFE_ROUTE} className="sideLink">
					Главная
				</Link>
					{/* <Router>
					<Switch>
					<Route  path="/"  component={Home}/>
						 <Route exact path="/about" component={About}/>
					</Switch>
					</Router> */}
				{/* <div className="cakeBtn" >
					<Link to={CAFE_ROUTE} > <div className="sideRoute">Главная</div></Link>
				</div> */}
			</div>
		</div>
		
		// <SidebarContainer isOpen={isOpen} onClick={toggle}>
		// 	<Icon onClick={toggle}>
		// 		<CloseIcon />
		// 	</Icon>

		// 	<SidebarMenu>
		// 		<SidebarLink to="/">Pizzas</SidebarLink>
		// 		<SidebarLink to="/">Desserts</SidebarLink>
		// 		<SidebarLink to="/">Full Menu</SidebarLink>
		// 	</SidebarMenu>

		// 	<SideBtnWrap>
		// 		<SidebarRoute to="/">Order Now</SidebarRoute>
		// 	</SideBtnWrap>
		// </SidebarContainer>
	);
};

export default Sidebar;
