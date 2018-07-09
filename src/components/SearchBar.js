import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadSearchGifs} from '../actions/searchGifs';

const SearchBar =  (props) => {

    const searchString = (e) => {
        props.loadSearchGifs(e.target.value);
    };

    return(
        <div>
            <input type="text" id="search" onKeyUp={searchString}/>
        </div>
    )

}

//Set the acction is going to be trigerred on this component
const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        loadSearchGifs,
    }, dispatch);

};

export default connect(null, mapDispatchToProps)(SearchBar);
 
