import React from 'react';
import Card from '../CardComponent';
import CardErrorB from './CardErrorB';

const CardsList = (props) => {
	const cards = Object.keys(props.cards.cards).map((card) => 
		<CardErrorB key={card} ><Card 
			card={props.cards.cards[card]} 
			addRemoveFavorites={props.addRemoveFavorites} /></CardErrorB>
	);
	return (
		<div className='container'>
			{cards}
		</div>
	);
};
export default CardsList;