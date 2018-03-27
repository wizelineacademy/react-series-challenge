import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import requests from '../../actions/requests';

import { SearchBar } from '../../style/style';

const searchGif = props => {
	const { searchRequest, trendingRequest } = props;

	const handleSearchChange = event => {
		if (event.target.value.length > 0) {
			searchRequest(event.target.value);
		} else {
			trendingRequest(event.target.value);
		}
	};

	return (
		<SearchBar onChange={handleSearchChange} placeholder="Search your gif!" />
	);
};

const mapDispatchToProps = dispatch => {
	const { searchRequest, trendingRequest } = requests.creators;
	return bindActionCreators(
		{
			searchRequest,
			trendingRequest
		},
		dispatch
	);
};

export default connect(null, mapDispatchToProps)(searchGif);
