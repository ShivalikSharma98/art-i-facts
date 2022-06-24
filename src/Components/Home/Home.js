import React from 'react';
import './Home.css';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<div className='home-container'>
			<div className='header-container'>
				<h1>
					<Typewriter
						cursor
						cursorStyle='|'
						typeSpeed={70}
						words={['Welcome to Art(i)facts']}
					/>
				</h1>
			</div>
			<div className='caption-container'>
				<h3>Check out these new additions!</h3>
				<p>(or use search form for specific pieces)</p>
			</div>
			<div className='img1'>
				<Link to='/results/186658'>
					<img
						src='https://nrs.harvard.edu/urn-3:HUAM:CARP00260_dynmc'
						alt='vessel'
					/>
				</Link>
			</div>
			<div className='img2'>
				<Link to='/results/280107'>
					<img
						src='https://nrs.harvard.edu/urn-3:HUAM:CARP11944_dynmc'
						alt='marble'
					/>
				</Link>
			</div>
			<div className='img3'>
				<Link to='/results/290923'>
					<img
						src='https://nrs.harvard.edu/urn-3:HUAM:DDC234823_dynmc'
						alt='kantharos'
					/>
				</Link>
			</div>
		</div>
	);
}

export default Home;
