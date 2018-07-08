import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Card from '../CardComponent';
import cards from '../../actions/cards';

const CardsList = (props) => {
	const {
		loadCards,
		addFavorites,
		removeFavorites,
	} = props;
	const cards = Object.keys(props.cards).map((card) => 
			<Card 
				key={card}
				card={props.cards[card]} 
				loadCards={loadCards}
				addFavorites={addFavorites}
				removeFavorites={removeFavorites} />
	);
	return (
		<div className='container'>
			{cards}
		</div>
	);
};

const mapStateToProps = (state) => {
  const {
    cards
  } = state;
  
  return {
    cards
  };
};

const mapDispatchToProps = (dispatch) => {
  	const { 
		loadCards,
		addFavorites,
		removeFavorites,
	} = cards.creators;

	return bindActionCreators({
	    loadCards,
		addFavorites,
		removeFavorites,
	}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);