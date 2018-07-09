import React from 'react';
import {addItem} from "../actions/favGifs";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

const Element = (props) => (
    <li onClick={() => props.addItem(props.gif)}>
        {props && props.gif.title ? props.gif.title: 'No data'}
    </li>
)
//Set the acction is going to be trigerred on this component
const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        addItem,
    }, dispatch);

};

export default connect(null, mapDispatchToProps)(Element);
