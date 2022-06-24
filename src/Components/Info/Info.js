import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Info({ searchOptions }) {
	const { id } = useParams();
	console.log(id);
	const url = `https://api.harvardartmuseums.org/object?q=objectid:${id}&apikey=${searchOptions.key}`;
	const [info, setInfo] = useState(null);
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((info) => {
				setInfo(info);
                console.log(info)
			})
			.catch(console.error);
		return setInfo(null);
	}, []);

	if (!info) {
		return <h3>Loading...</h3>;
	}

	return (
		<div className='info-container'>
			<img
				src={info?.records[0]?.images[0]?.baseimageurl}
				alt={info?.records[0]?.images[0]?.alttext}
			/>
			<h2>{info?.records[0]?.title}</h2>
			<h4>Artist: {info.records[0]?.people ? info.records[0]?.people[0]?.name : 'unknown'}</h4>
			<p>{info?.records[0]?.description}</p>
		</div>
	);
}

export default Info;
