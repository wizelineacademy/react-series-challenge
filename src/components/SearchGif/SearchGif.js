import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import searchGifsActions from '../../actions/searchGifs';
// import {  } from './Searchgif.styled';

const SearchGif = (props) => {

    const onKeyUpSearch = (e) => {
        props.loadSearchGifs(e.target.value);
    };

    return (
        <div>
            <label htmlFor="searchGif">Search Gif</label>
            <input type="text" id="searchGif" onKeyUp={onKeyUpSearch}/>
        </div>
    );
};

const mapDispatchToProps = (dispatch) => {
    const { loadSearchGifs } = searchGifsActions.creators;

    return bindActionCreators({
        loadSearchGifs
    }, dispatch)
};

export default connect(null, mapDispatchToProps)(SearchGif);