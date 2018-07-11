import React from 'react';
import { connect } from 'react-redux';
import FavoritesList from '../FavoritesList.js';
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
            giftList = {infoToShow ? <FavoritesList 
                            gifts={infoToShow}/>:""}
        />
    );
}



const  mapStateToProps = (state) => {
    const { favorites } = state.favoritesReducer;
    const { isSearching, favoritesMatched } = state.favoritesReducer.searchFavorites;
    
    return { favorites, isSearching, favoritesMatched };
};

export default connect(mapStateToProps, null)(Favorites);
export {
    Favorites
}
