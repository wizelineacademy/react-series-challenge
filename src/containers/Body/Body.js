import React, { Component } from 'react';
import { connect } from 'react-redux';
import GifList from '../GifList/GifList';
import { SubTitle } from '../../style/style';

class Body extends Component {
	render() {
		let section = 'API not found';
		let location = '';
		if (this.props.FavoriteSection) {
			section = 'Favorites';
			location = 'Favorites';
		} else {
			location = 'Home';
			if (this.props.searching) {
				section = 'Search results';
			}
			if (this.props.trending) {
				section = 'Trending Hot Gifs';
			}
		}
		return [
			<SubTitle key="TrendSub">{section}</SubTitle>,
			<GifList page={location} key="TrendList" />
		];
	}
}

const mapStateToProps = ({ gifsFetch }) => {
	return {
		searching: gifsFetch.searching,
		trending: gifsFetch.trending
	};
};

export default connect(mapStateToProps)(Body);
