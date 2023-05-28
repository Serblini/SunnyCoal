import './App.css';
import {observer} from "mobx-react-lite";
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Footer from './components/Footer';
import React, { useState } from "react";
import AppRouter from './components/AppRouter';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import './components/Hero.css'
const App = observer(() =>{
	const [show, setShow] = useState(false);
	const toggle = () => {
		setShow(!show);
	};
	return (

		<Router> 
			<Sidebar show={show} toggle={toggle}></Sidebar>
			<Navbar toggle={toggle}></Navbar>
			
		<AppRouter></AppRouter>
			<Footer />
		</Router>
		
)
})

export default App;
