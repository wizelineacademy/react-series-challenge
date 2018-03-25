import React, { Component } from 'react';
import Home from './containers/Home/Home';
import { Provider } from 'react-redux';
import store from './store';
import global from './style/global';
import { Border, Title } from './style/style';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<header>
						<Title>Gif Madness</Title>
					</header>
					<Border home>
						<Home />
					</Border>
				</div>
			</Provider>
		);
	}
}

export default App;
