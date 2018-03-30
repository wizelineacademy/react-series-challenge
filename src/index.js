import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

export class Index extends Component {
	render() {
		registerServiceWorker();
		return (
			<Router>
				<App />
			</Router>
		);
	}
}

ReactDOM.render(<Index />, document.getElementById('root'));
