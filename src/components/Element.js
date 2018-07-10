import React from 'react';
import {addItem} from "../actions/favGifs";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {LOCAL_STORAGE_FAVS} from '../middleware/favStorage';

const Element = (props) => {
    const localStorageFavsId = JSON.parse(localStorage.getItem(LOCAL_STORAGE_FAVS));

    if (!localStorageFavsId || !localStorageFavsId[props.gif.id]) {
        return <img src={props.gif.images.original.webp} onClick={() => props.addItem(props.gif)}/>
    } else {
       return (
           <div>
               <h2>fav</h2>
               <img src={props.gif.images.original.webp} onClick={() => props.addItem(props.gif)}/>
           </div>
       )
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
