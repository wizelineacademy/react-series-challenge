import React from 'react';
import {addItem} from "../actions/favGifs";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {LOCAL_STORAGE_FAVS} from '../middleware/favStorage';
import {
    RelativeDiv,
    ElementOverlay,
    ElementImg,
    IconFavBlue,
} from './Element.styled';

const Element = (props) => {
    const localStorageFavsId = JSON.parse(localStorage.getItem(LOCAL_STORAGE_FAVS));

    if (!localStorageFavsId || !localStorageFavsId[props.gif.id]) {
        return (
            <RelativeDiv>
                <i className="fas fa-thumbs-up"></i>
                <ElementImg src={props.gif.images.original.webp} onClick={() => props.addItem(props.gif)}/>
            </RelativeDiv>
        )
    } else {
        //props.addItem(props.gif);
       return (
           <RelativeDiv>
               <IconFavBlue className="far fa-thumbs-up"></IconFavBlue>
               <ElementImg src={props.gif.images.original.webp} onClick={() => props.addItem(props.gif)}/>
           </RelativeDiv>
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
