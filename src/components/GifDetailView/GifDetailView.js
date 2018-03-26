import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import favoritesActions from '../../actions/favorites';

import { FavButton } from '../ListGifs/ListGifs.styled';
import { GifDetailViewStyled } from './GifDetailView.styled';

const GifDetailView = props => {
    const { list } = props.giphy;
    const favList = props.favorites.list.data;
    let isFav = false
    if (favList) {
        isFav = favList.filter(fav => fav.id === list.list.data.id).length === 1 ? true : false;
    }
    return (<GifDetailViewStyled>
        <FavButton
            faved={isFav}
            onClick={event => {
                if (!isFav) {
                    props.addFavorite(list.list.data);
                } else {
                    props.removeFavorite(list.list.data.id);
                }
            }}>FavMe</FavButton>
        <img src={list.list.data.images.original.url} title={list.list.data.title} alt={list.list.data.title} />
    </GifDetailViewStyled>)
};

const mapStateToProps = (state) => {
    return {
        giphy: state.giphy,
        favorites: state.favorites
    }
}

const mapDispatchToProps = (dispatch) => {
    const { addFavorite, removeFavorite } = favoritesActions.creators;

    return bindActionCreators({
        addFavorite,
        removeFavorite
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GifDetailView);