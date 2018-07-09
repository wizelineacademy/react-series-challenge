import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Card from '../CardComponent';
import cards from '../../actions/cards';

class CardsList extends Component {
	constructor(props){
		super(props);
	}
	render() {
		const cards = Object.keys(this.props.cards.cards).map((card) => 
			<Card 
				key={card}
				card={this.props.cards.cards[card]} 
				addRemoveFavorites={this.props.addRemoveFavorites} />
		);
		return (
			<div className='container'>
				{cards}
			</div>
		)
	};
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
		loadTrending,
		addFavorites,
		removeFavorites,
		addRemoveFavorites,
		loadFavorites,
		setFavorites,
	} = cards.creators;

	return bindActionCreators({
	    loadCards,
		loadTrending,
		addFavorites,
		removeFavorites,
		addRemoveFavorites,
		loadFavorites,
		setFavorites,
	}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);