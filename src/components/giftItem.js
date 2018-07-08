import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
//import Modal from 'react-modal';
import favoriteActions from '../redux/actions/favorites';
import giftModalActions from '../redux/actions/giftModal';

const GiftItem = (props) => {
    const {
        url, 
        name,
        id,
        showGiftModal,
    }=props

    const gift = { url, id, name }

    return (
        <img src={url} width={"100px"} height={"100px"} onClick={()=>showGiftModal({gift})}/>
    );
}

const mapDispatchToProps = (dispatch) => {
    const { showGiftModal } = giftModalActions.creators;

    return bindActionCreators({
        showGiftModal,
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(GiftItem);
