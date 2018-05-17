import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import requests from '../../actions/requests';

export class ErrorBoundary extends Component {
	componentDidCatch(error) {
		this.props.gifsLoadError(true, error);
	}

	render() {
		if (this.props.error) {
			// You can render any custom fallback UI
			return (
				<h1>
					{this.props.errorInfo}
					<br />An error occurred
				</h1>
			);
		}
		return this.props.children;
	}
}

const mapStateToProps = ({ gifsFetch }) => {
	return {
		error: gifsFetch.error,
		errorInfo: gifsFetch.errorInfo
	};
};

const mapDispatchToProps = dispatch => {
	const { gifsLoadError } = requests.creators;
	return bindActionCreators(
		{
			gifsLoadError
		},
		dispatch
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary);
