import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Card from '../CardComponent';
import cards from '../../actions/cards';
import { CardItem } from '../CardComponent/Card.Styled';

/*----------------*/
class CardErrorB extends Component {
	constructor(props) {
		super(props);
		this.state = {
	  		hasErrors: false,
	  		info: '',
		}
	}

	componentDidCatch(error, info) {
	  this.setState(() => ({
	    hasErrors: true,
	    info,
	  }));
	}

	render() {
		const { children } = this.props;
		const { hasErrors } = this.state;

		if (hasErrors) {
			return <CardItem>
				<p>Image toooo big</p>
			</CardItem>
		}
		return children;
	}
}
/*----------------*/

class CardsList extends Component {
	constructor(props){
		super(props);
	}
	render() {
		const cards = Object.keys(this.props.cards.cards).map((card) => 
			<CardErrorB key={card} ><Card 
				card={this.props.cards.cards[card]} 
				addRemoveFavorites={this.props.addRemoveFavorites} /></CardErrorB>
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