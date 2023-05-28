import '../App.css';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Hero from './Hero';
import Favorite from './Favorite';
import Cakes from './Cakes';
import Hbut from './Hbut';
import Footer from './Footer';
import React, { Component } from "react";
import About from "./About";


function Home() {
	return (
		<Router>
			<Hero></Hero>
			<Cakes id="menu"></Cakes>
			<Favorite></Favorite>
			{/* <Chefs id="staff"></Chefs> */}
			<div className="App">
				
        
     </div>
			
		</Router>
	);
}

export default Home;
