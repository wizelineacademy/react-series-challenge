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
		searchCards({ searchTerm })
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

const mapStateToProps = (state) => {
  const {
    search
  } = state;
  
  return {
    search
  };
};

const mapDispatchToProps = (dispatch) => {
  	const { 
		searchCards,
	} = search.creators;

	return bindActionCreators({
	    searchCards,
	}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);