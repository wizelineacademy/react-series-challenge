import React, { Component } from 'react';
import GifList from '../GifList/GifList';
import { SubTitle } from '../../style/style';

class Home extends Component {
	render() {
		return [
			<SubTitle key="TrendSub">Trending Hot Gifs</SubTitle>,
			<GifList key="TrendList" />
		];
	}
}

export default Home;
