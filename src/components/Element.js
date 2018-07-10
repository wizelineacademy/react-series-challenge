import React from 'react';
import {addItem} from "../actions/favGifs";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

const Element = (props) => {
    if (props.gif.favorite) {
        return (
            <div>
                <h2>fav</h2>
                <img src={props.gif.images.original.webp} onClick={() => props.addItem(props.gif)}/>
            </div>

        )
    } else {
       return <img src={props.gif.images.original.webp} onClick={() => props.addItem(props.gif)}/>
    }
    return <h1></h1>
}
//Set the acction is going to be trigerred on this component
const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        addItem,
    }, dispatch);

};

export default connect(null, mapDispatchToProps)(Element);
