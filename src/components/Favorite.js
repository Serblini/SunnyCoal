import React from 'react';
import './Favorite.css';
import Slide from 'react-reveal/Reveal';
import favorite from '../images/favourite.jpg';

const Favorite = () => {
	const scrollTo = (id) => {
		const element = document.getElementById(id);

	
		element.scrollIntoView({
			behavior: 'smooth',
		});
	};
	return (
		<div className="favContainer">
			<h2>Наш любимец</h2>

			<div className="favContent">
				<Slide left>
					<img src={favorite} className="favImage" alt="cake" />
				</Slide>
				<Slide right>
					<div className="textContent">
						<p>
						Клубника со сливками и пряностями с добавлением сиропа. Этот торт
							объединяет все классические сочетания клубники, немного похожий на
							альбом лучших хитов, но гораздо вкуснее!
						</p>
					</div>
				</Slide>
			</div>
			<button className="favBtn" onClick={() => scrollTo('top')}>Попробовать</button>
		</div>
	);
};

export default Favorite;
