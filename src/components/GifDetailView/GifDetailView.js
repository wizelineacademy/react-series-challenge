/**
 * Component to show target gif's original file
 */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import favoritesActions from '../../actions/favorites';

import { FavButton } from '../ListGifs/ListGifs.styled';
import { GifDetailViewStyled } from './GifDetailView.styled';

const GifDetailView = props => {
    const { list } = props.giphy;
    const favList = props.favorites.originalList.data;

    if(!list || !favList || list.data.length > 1) {
        return null;
    }
    const tgtGif = list.data[0];
    let isFav = false
    if (favList) {
        isFav = favList.filter(fav => fav.id === tgtGif.id).length === 1 ? true : false;
    }
    return (<GifDetailViewStyled>
        <FavButton
            faved={isFav}
            onClick={event => {
                if (!isFav) {
                    props.addFavorite(tgtGif);
                } else {
                    props.removeFavorite(tgtGif.id);
                }
            }}>FavMe</FavButton>
        <img src={tgtGif.images.original.url} title={tgtGif.title} alt={tgtGif.title} />
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