import React from 'react';
import { connect } from 'react-redux';
import GiftItem from '../giftItem';
import GiftContainer from '../GiftContainer';
import { SearchBarFavorites } from '../SearchBars';

const Favorites = (props) => {
    const {
        favorites,
        favoritesMatched,
        isSearching,
    }=props

    const infoToShow = isSearching ? favoritesMatched : favorites;
    
    return (
        <GiftContainer 
            searchBar = {<SearchBarFavorites />}
            giftList = {infoToShow ? <GiftList 
                            gifts={infoToShow}/>:""}
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
    const { favorites } = state.favoritesReducer;
    const { isSearching, favoritesMatched } = state.favoritesReducer.searchFavorites;
    
    return { favorites, isSearching, favoritesMatched };
};

export default connect(mapStateToProps, null)(Favorites);
