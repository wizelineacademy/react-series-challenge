import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GiftItem from './giftItem';
import GiftContainer from './GiftContainer';

const Favorites = (props) => {
    const {
        favorites,
    }=props

    return (
        <GiftContainer 
            searchBar = {"hola"}
            giftList = {favorites ? <GiftList 
                            gifts={favorites}/>:""}
        />
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
    
    return { favorites };
};

export default connect(mapStateToProps, null)(Favorites);
