import React from 'react';
import { Card } from 'react-bootstrap';

function Results({ images }) {
	if (!images.length) {
		return <h2>No Images Found</h2>;
	}
	return (
		<div className='gallery'>
			{images
				.filter((image) => {
					if (image?.images[0]?.baseimageurl) {
						return true;
					} else {
						return false;
					}
				})
				.map((image) => (
					<div key={image.id} className='art-image'>
						<h2>{image.title}</h2>
						<h5>{image.people[0]?.name}</h5>
						<img
							src={image?.images[0]?.baseimageurl}
							alt={image?.images[0]?.alttext}
						/>
						<p>{image.description}</p>
					</div>
				))}
		</div>
	);
}

export default Results;
