import React, { Component } from 'react';
import GifList from '../GifList/GifList';
import { SubTitle } from '../../style/style';

class Favorites extends Component {
	render() {
		return [
			<SubTitle key="Favorites">Favorites</SubTitle>,
			<GifList favorite key="FavsList" />
		];
	}
}

export default Favorites;
