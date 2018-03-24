import React, { Component } from 'react';
import Home from './containers/Home/Home';
import { Provider } from 'react-redux';
import store from './store';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<header>
						<h1>Let's start</h1>
					</header>
					<Home />
				</div>
			</Provider>
		);
	}
}

export default App;
