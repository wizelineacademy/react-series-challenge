import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import giftModalActions from '../redux/actions/giftModal';
import { GiftItemStyled } from '../styled_component/GiftItem.styled';

const GiftItem = (props) => {
    const {
        url, 
        name,
        id,
        showGiftModal,
    }=props

    const gift = { url, id, name }

    return (
        <GiftItemStyled src={url} onClick={()=>showGiftModal({gift})} alt={""}/>
    );
}

const mapDispatchToProps = (dispatch) => {
    const { showGiftModal } = giftModalActions.creators;

    return bindActionCreators({
        showGiftModal,
    }, dispatch);
};

export default connect(null, mapDispatchToProps)(GiftItem);
