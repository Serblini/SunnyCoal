import React, {useState} from 'react';
import './Favorite.css';

const Favorite = () => {
    const [move, setMove] = useState(false);

	const moveNavbar = () => {
		
			setMove(false);
		}
	
	window.addEventListener('scroll', moveNavbar);
	return (
		<div className="favContainer" style={{ height: 1000}}>

                   
                    <div  className="textContent"
                            style={{ marginTop:100, maxWidth: '100%', background:'#4216004f'}} 
                            >
                                 <h2 >О нас</h2>
                            <p 
                             style={{ width: '80%', textAlign:'justify', padding:10}} 
                            >
                               
                               Кафе "Солнечный уголёк" - это уникальное заведение, посвященное наслаждению 
                               неповторимыми тортиками, пирожными и освежающими холодными напитками.<br/>
                                <br/>
                               Наша главная цель - предложить вам высокое качество блюд, 
                               которые станут настоящим удовольствием для вашего вкуса, при этом сохраняя доступные 
                               цены и обеспечивая внимательное обслуживание каждого гостя.<br/>
                               Однако наша слава основана не только на наших фирменных десертах. <br/>
                               Мы умеем создавать волшебство и в других кулинарных шедеврах. <br/>
                               Наш кондитер готовит тортики, которые покорят вас своим изысканным вкусом и 
                               неповторимым дизайном. Пирожные, приготовленные с любовью и тщательным вниманием к деталям, 
                               превратят вашу посещение в настоящий кулинарный праздник.
                               <br/>
                               В наших уютных и стильных кафе вы сможете насладиться атмосферой комфорта и расслабленности. Каждая деталь оформления здесь продумана, чтобы вы могли наслаждаться своими гастрономическими приключениями, не отвлекаясь на мелочи.
                               <br/>
                               Приходите в кафе "Солнечный уголёк" и откройте для себя мир вкусов и наслаждений, который мы создали специально для вас. Доверьтесь нам, и мы сделаем ваше время, проведенное у нас, по-настоящему незабываемым.
                                       </p>
                            </div>
                            <div  className="textContent"
                            style={{ marginTop:100, maxWidth: '100%', background:'#4216004f'}} 
                            >
                                 <h2 >О заказах</h2>
                            <p 
                             style={{ width: '80%', textAlign:'justify', padding:10}} 
                            >
                               
                               Вы можете набрать нас по номеру <a style={{textDecoration:'none', color:'chocolate'}} href="tel:+79599999090">+79599999090</a>, если вы хотите перекусить у нас или зайти в наше кафе по адресу lorem ipsum!<br/>
                                <br/>
                               </p>
                            </div>
                    <div className="favContent">
                    
                    </div>
                   
                    </div>





	
	);
};

export default Favorite;
