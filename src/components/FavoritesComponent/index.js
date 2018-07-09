//import DummyData from './DummyData.js';
import React, {Component} from 'react';
import CardsList from '../CardsListComponent';
import Search from '../SearchComponent';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cards from '../../actions/cards';
import search from '../../actions/search';

class ComponentsFavorites extends Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){
		console.log('this.props',this.props);
		this.props.loadFavorites();
	}
	render(){
		return (
			<React.Fragment>
				<Search searchAction={this.props.searchFavs} />
				<h1>Trending gif</h1>
				<CardsList />
			</React.Fragment>
		);
	}
}

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
	const { 
		searchFavs,
	} = search.creators;

	return bindActionCreators({
	    loadCards,
		loadTrending,
		addFavorites,
		removeFavorites,
		addRemoveFavorites,
		loadFavorites,
		setFavorites,
		searchFavs,
	}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentsFavorites);