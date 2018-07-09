import React  from "react";
import { GiftStyledContainer }  from '../styled_component/Home.styled';
import AddGiftModal from './Modal/AddGiftModal';

const GiftContainer = (props) => {
    return (
        <GiftStyledContainer>
            <AddGiftModal />
            {props.searchBar}
            {props.giftList}
        </GiftStyledContainer>  
    );
};

export default GiftContainer;   