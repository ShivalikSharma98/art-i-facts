import './App.css';
import { Routes, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Results from './Components/Results/Results';
import Info from './Components/Info/Info';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import { Button, Container, Form, FormControl, Nav } from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TypeWriter } from 'react-typewriter';

function App() {
	let navigate = useNavigate();

	const searchOptions = {
		key: process.env.REACT_APP_API_KEY,
		size: 500,
		api: 'https://api.harvardartmuseums.org/object',
	};

	const [images, setImages] = useState([]);

	const [search, setSearch] = useState('');

	function handleChange(event) {
		setSearch(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		getImages(search);
		navigate(`/results`);
		document.getElementById('form-input').value = '';
	}

	function getImages(search) {
		const url = `${searchOptions.api}?size=${searchOptions.size}&page=1&page=2&page=3&page=4&page=5&keyword=${search}&apikey=${searchOptions.key}&hasimage=1&classification=Accessories+(non-art)|Albums|Amulets|Architectural+Elements|Armor|Books|Boxes|Cameos|Drawings|Fragments|Furnishings|Gems|Inscriptions|Jewelry|Lighting+Devices|Manuscripts|Material+Specimens|Mirrors|Mosaics|Musical+Instruments|Paintings|Paintings+with+Calligraphy|Paintings+with+Text|Photographs|Plaques|Prints|Riding+Equipment|Ritual+Implements|Rubbings|Sculpture|Seals|Stained+Glass|Tablets|Textile+Arts|Timepieces|Tokens|Tools+and+Equipment|Vessels|Weapons+Ammunition&fields=people,description,images,title,medium,classification,division,url`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setSearch('');
				return setImages(res.records);
			})
			.catch(console.error);
	}

	return (
		<div className='App'>
			<Navbar className='navbar navbar-custom'>
				<Container>
					<LinkContainer to='/'>
						<Navbar.Brand id='navbar-brand'>Art(i)facts</Navbar.Brand>
					</LinkContainer>
					<Nav>
						<LinkContainer to='/'>
							<Nav.Link id='navbar-text'>Home</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/about'>
							<Nav.Link id='navbar-text'>About</Nav.Link>
						</LinkContainer>
					</Nav>
					<Form className='d-flex' onSubmit={handleSubmit}>
						{/* <FloatingLabel
							controlId='floatingInput'
							label='Search'
							className='me-2'> */}
						<FormControl
							id='form-input'
							type='search'
							placeholder='Search'
							aria-label='Search'
							className='me-2'
							onChange={handleChange}
						/>
						{/* </FloatingLabel> */}
						<Button id='button' type='submit'>
							Search
						</Button>
					</Form>
				</Container>
			</Navbar>
			<main>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/results' element={<Results images={images} />} />
					{/* Find a real param from api for the end of this url, id is being used as a placeholder */}
					<Route
						path='/results/:id'
						element={<Info searchOptions={searchOptions} />}
					/>
				</Routes>
			</main>
		</div>
	);
}

export default App;
