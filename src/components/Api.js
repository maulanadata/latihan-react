import React, { useState, useEffect } from 'react';
import './styled.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import Card from './Card';

function Api() {

	const [state, setState] = useState([]);

	useEffect(() => {
		axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=c99a687890015fbe80f81d279426568d&language=en-US&page=1')
			.then(resp => {
				if (resp.data) {
					setState(resp.data.results);
				}
			})
			.catch(err => {
				console.log(err.message, '<<< error');
			});
	}, []);

	return (
		<Container className='my-3'>
			<div className='list'>
				{ state.map(item => (
					<Card
						movies={ item }
					/>
				)) }
			</div>
		</Container>
	);
}

export default Api;
