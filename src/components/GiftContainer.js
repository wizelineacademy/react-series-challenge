import React  from "react";
import { GiftStyledContainer }  from '../styled_component/Home.styled';
import AddGiftModal from './Modal/AddGiftModal';
import ErrorBoundary from './ErrorBoundary';

const GiftContainer = (props) => {
    return (
        <GiftStyledContainer>
            <AddGiftModal />
            {props.searchBar}
            <ErrorBoundary gifts={props.gifts} component={<p>Search Not Found</p>}>
                {props.giftList}
            </ErrorBoundary>
        </GiftStyledContainer>  
    );
};

export default GiftContainer;   