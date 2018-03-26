import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Home from './containers/Home/Home';
import SearchGif from './components/SearchGif/SearchGif';
import store from './store';
import global from './style/global';
import { Border, Title, Header } from './style/style';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<Header>
						<Title>Pug Madness</Title>
						<SearchGif />
					</Header>
					<br />
					<Border home>
						<Home />
					</Border>
				</div>
			</Provider>
		);
	}
}

export default App;
