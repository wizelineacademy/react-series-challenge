//import DummyData from './DummyData.js';
import React from 'react';
import CardsList from '../CardsListComponent';

const ComponentsHome = (props) => {
	return (
		<React.Fragment>
			<h1>Trending gif</h1>
			<CardsList />
			<button> More... </button>
		</React.Fragment>
	);
}

export default ComponentsHome;
