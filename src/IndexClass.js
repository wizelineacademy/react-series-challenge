import React, { Component } from 'react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

export class Index extends Component {
	render() {
		return (
			<Router>
				<App />
			</Router>
		);
	}
}
