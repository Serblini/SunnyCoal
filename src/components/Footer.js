import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<div className="footerContainer">
			<div className="footerColumn">
				<h4>Социальные сети</h4>
				<div>Вконтакте</div>
				{/* <div>Instagram</div>
				<div>Telegram</div>
				<div>LinkedIn</div> */}
			</div>
			<div className="footerColumn">
				{/* <h4>О нас</h4>
				<div>Contact us</div>
				<div>Careers</div> */}
			</div>
			<div className="footerColumn">
				<h4>Местоположение</h4>
				<div>ЛНР</div>
				<div>Антрацит</div>
			</div>
		</div>
	);
};

export default Footer;
