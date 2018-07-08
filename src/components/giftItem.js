import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import Modal from 'react-modal';
import favoriteActions from '../redux/actions/favorites';

const GiftItem = (props) => {
    const {
        url, 
        name,
        id,
        addFavorite,
    }=props

    const gift = { url, id, name }

    return (
        <img src={url} width={"100px"} height={"100px"} onClick={()=>addFavorite({gift})}/>
    );
}

const mapDispatchToProps = (dispatch) => {
    const { addFavorite } = favoriteActions.creators;

    return bindActionCreators({
        addFavorite,
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(GiftItem);
