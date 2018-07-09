import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadSearchGifs} from '../actions/searchGifs';

const SearchBar =  (props) => {

    const getInputValue = () => {
        const input = document.getElementById('search').value;
        console.log(input);
        props.loadSearchGifs({text:input});
    }

    return(
        <div>
            <input id='search'>
            </input>
            <button
                onClick={() => getInputValue()}
            >
                Add
            </button>
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
 
