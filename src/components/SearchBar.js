import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import searchBarActions from '../actions/searchBar';

const SearchBar = (props) => {
    return (
        <div>
            Soy la SearchBar
        </div>
    );
};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    const { searchBarSubmit } = searchBarActions.creators;

    return bindActionCreators({ searchBarSubmit }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
