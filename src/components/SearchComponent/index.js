import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import search from '../../actions/search';

class Search extends Component {
	constructor(props){
		super(props);
		this.state = {
			searchTerm : ''
		}
	}
	handleSubmit = (event) => {
		event.preventDefault();
		const { searchCards } = this.props;

		const searchTerm = this.state.searchTerm;
		this.props.searchAction({ searchTerm });
	}
	setSearchTerm = (event) => {
    	const { value } = event.target;
    	this.setState({ searchTerm: value });
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit} className='searchForm'>
				<span>
					<input type='text' onChange={this.setSearchTerm} />
				</span>
				<span>
					<button type='submit' > Search </button>
				</span>
			</form>
		)
	};
};
export default Search;