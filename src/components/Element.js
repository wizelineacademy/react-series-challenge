import React from 'react';
import {addItem} from "../actions/favGifs";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {LOCAL_STORAGE_FAVS} from '../middleware/favStorage';
import {
    RelativeDiv,
    ElementImg,
    IconFav,
    IconFavBlue,
    Shadow
} from './Element.styled';

const Element = (props) => {
    const localStorageFavsId = JSON.parse(localStorage.getItem(LOCAL_STORAGE_FAVS));

    if (!localStorageFavsId || !localStorageFavsId[props.gif.id]) {
        return (
            <RelativeDiv onClick={() => props.addItem(props.gif)}>
                <Shadow>
                    <IconFav className="fas fa-thumbs-up fa-3x"></IconFav>
                </Shadow>
                <ElementImg src={props.gif.images.original.webp} />
            </RelativeDiv>
        )
    } else {
        //props.addItem(props.gif);
       return (
           <RelativeDiv>
               <Shadow>
                   <IconFavBlue className="far fa-thumbs-up fa-3x"></IconFavBlue>
               </Shadow>
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
