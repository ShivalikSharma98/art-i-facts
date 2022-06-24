import React from 'react';
import { Button, Card, CardImg } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Results.css';

function Results({ images }) {
	if (!images.length) {
		return <h3>Loading...</h3>;
	}
	return (
		<div className='gallery'>
			{images
				.filter((image) => {
					if (image?.images[0]?.baseimageurl && image?.description) {
						return true;
					} else {
						return false;
					}
				})
				.map((image) => (
					<Card key={image.id} style={{ width: '18rem' }}>
						<CardImg
							variant='top'
							src={image.images[0]?.baseimageurl}
							alt={image.images[0]?.alttext}
						/>
						<Card.Body>
							<Card.Title>{image.title}</Card.Title>
							<LinkContainer to={`/results/${image.id}`}>
								<Button variant='primary'>Details</Button>
							</LinkContainer>
						</Card.Body>
					</Card>
				))}
		</div>
	);
}

export default Results;
