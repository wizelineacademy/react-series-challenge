import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux/index';
import {addItem} from '../actions/favGifs';

const SearchBar =  (props) => (
    <div>
        <input >
        </input>
        <button
        onClick = {()=> props.favGifs()}
        >Add</button>
    </div>
)



//Set the acction is going to be trigerred on this component
const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        addItem,
    }, dispatch);

};

export default connect(null, mapDispatchToProps)(SearchBar);
 
