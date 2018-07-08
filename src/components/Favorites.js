import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { GiftContainer }  from '../styled_component/Home.styled';
import AddGiftModal from './Modal/AddGiftModal';
import GiftItem from './giftItem';

const Favorites = (props) => {
    const {
        favorites,
    }=props

    return (
        <GiftContainer>
            <AddGiftModal />
            {favorites && <GiftList
                    gifts={favorites}/>}
        </GiftContainer>
    );
}

const GiftList = (props) => {
    const { gifts } = props
  
    return Object.values(gifts).map((item, index)=> (
      <GiftItem 
        url={item.url}
        name={item.name}
        id={item.id}
        key={index}/>
    ));
}

const  mapStateToProps = (state) => {
    const { favorites, } = state;
    
    return { favorites, };
};

export default connect(mapStateToProps, null)(Favorites);
