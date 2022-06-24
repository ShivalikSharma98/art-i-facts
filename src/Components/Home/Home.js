import React from 'react';
import './Home.css';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<div>
			<div className='header-container'>
				<h1>
					<Typewriter
						cursor
						cursorStyle='|'
						typeSpeed={70}
						words={["Welcome to Art(i)facts!"]}
					/>
				</h1>
			</div>
			
		</div>
	);
}

export default Home;
