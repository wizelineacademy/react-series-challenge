import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addItem} from '../actions/favGifs';

const SearchBar =  (props) => {

    const getInputValue = () => {
        const input = document.getElementById('search').value;
        console.log(input);
        props.addItem({text:input});
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
        addItem,
    }, dispatch);

};

export default connect(null, mapDispatchToProps)(SearchBar);
 
