import React from 'react';
import {addItem} from "../actions/favGifs";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

const Element = (props) => (
    <img src={props.gif.images.original.webp} onClick={() => props.addItem(props.gif)}/>


)
//Set the acction is going to be trigerred on this component
const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        addItem,
    }, dispatch);

};

export default connect(null, mapDispatchToProps)(Element);
