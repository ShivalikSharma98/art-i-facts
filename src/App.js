import './App.css';
import { Routes, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Results from './Components/Results/Results';
import Info from './Components/Info/Info';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import {
	Button,
	Container,
	FloatingLabel,
	Form,
	FormControl,
	Nav,
} from 'react-bootstrap';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
	let navigate = useNavigate();

	const searchOptions = {
		key: process.env.REACT_APP_API_KEY,
		size: 500,
		api: 'https://api.harvardartmuseums.org/object',
	};

	const [images, setImages] = useState([]);

	const [search, setSearch] = useState('sanskrit');

	function handleChange(event) {
		setSearch(event.target.value);
	}

	function handleSubmit(event) {
		event.preventDefault();
		getImages(search);
		navigate(`/results`);
	}

	function getImages(search) {
		const url = `${searchOptions.api}?size=${searchOptions.size}&keyword=${search}&apikey=${searchOptions.key}&hasimage=1`;

		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setImages(res.records);
				console.log(res.records);
				setSearch('');
			})
			.catch(console.error);
	}

	return (
		<div className='App'>
			<Navbar bg='dark' variant='dark'>
				<Container>
					<Navbar.Brand href='/'>Art(i)facts</Navbar.Brand>
					<Nav>
						<LinkContainer to='/'>
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
						<LinkContainer to='/about'>
							<Nav.Link>About</Nav.Link>
						</LinkContainer>
					</Nav>
					<Form className='d-flex' onSubmit={handleSubmit}>
						{/* <FloatingLabel
							controlId='floatingInput'
							label='Search'
							className='me-2'> */}
						<FormControl
							type='search'
							placeholder='Search'
							aria-label='Search'
							className='me-2'
							onChange={handleChange}
						/>
						{/* </FloatingLabel> */}
						<Button type='submit' variant='outline-success'>
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
					<Route path='/results/:id' element={<Info />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
