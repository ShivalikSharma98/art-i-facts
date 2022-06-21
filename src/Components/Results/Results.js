import React from 'react';

function Results({ images }) {
	if (!images.length) {
		return <h2>No Images Found</h2>;
	}
	return (
        <div className='gallery'>
            {images.map((image) => (
                <div key={image.id} className='art-image'>
                    <h2>{image.title}</h2>
                    <h5>{image.medium}</h5>
                    <img src={image.images[0]?.baseimageurl} alt={image.images.alttext} />
                    <p>{image.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Results;
