import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { withRouter } from 'react-router-dom';
import {loadSearchGifs} from '../actions/searchGifs';
import {searchFavGifs} from '../actions/favGifs';
import {ALL_GIFS_VIEW} from "../App";
import {FAV_GIFS_VIEW} from "../App";
import { BrowserRouter as Router } from 'react-router-dom';

const SearchBar =  withRouter ((props) => {

    const searchString = (e) => {
        const {pathname} = props.history.location;
        switch (pathname) {
            case ALL_GIFS_VIEW:
                props.loadSearchGifs(e.target.value);
                break;
            case FAV_GIFS_VIEW:
                props.searchFavGifs(e.target.value);
                break
            default:
                props.loadSearchGifs(e.target.value);
        }
    };

    return(
        <Router>
            <input type="text" id="search" onKeyUp={searchString}/>
        </Router>
    )

});

//Set the acction is going to be trigerred on this component
const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        loadSearchGifs,
        searchFavGifs
    }, dispatch);

};

export default connect(null, mapDispatchToProps)(SearchBar);
 
