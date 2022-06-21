import React from 'react';

function About() {
	return (
		<div>
			<h2>About</h2>
			<p>
				Art(i)facts is a quick, and easy to use library web
				application for historical and modern day art. The application was built using Harvard Art
				Museum's REST-style API which provides the most up to date information
				on all kinds of pieces, ranging from modern day Abstract Expressionist
				Paintings to 6,000 year old East Asian Ceramics.
				<br />
				<br />
				The application uses a visitor provided keyword search parameter to sift
				through the Harvard Art Museum database and returns the most relevant
				search results. The application displays search result images in the
				form of cards, if users wish to learn more about any specific piece they
				can simply click on a card which prompts them to a page containing more
				information.
			</p>
		</div>
	);
}

export default About;
