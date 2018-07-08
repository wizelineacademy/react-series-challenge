//import DummyData from './DummyData.js';
import React from 'react';
import CardsList from '../CardsListComponent';
import Search from '../SearchComponent';

const ComponentsHome = (props) => {
	return (
		<React.Fragment>
			<Search />
			<h1>Trending gif</h1>
			<CardsList />
		</React.Fragment>
	);
}

export default ComponentsHome;
