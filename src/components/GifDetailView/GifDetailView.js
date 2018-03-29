/**
 * Component to show target gif's original file
 */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import favoritesActions from '../../actions/favorites';

import { FavButton } from '../ListGifs/ListGifs.styled';
import { GifDetailViewStyled } from './GifDetailView.styled';

class GifDetailView extends Component {
    render() {
        const { list } = this.props.giphy;
        const favList = this.props.favorites.originalList.data;

        if (!list || !favList || list.data.length > 1) {
            return null;
        }
        const tgtGif = list.data[0];
        let isFav = false
        if (favList) {
            for(let i= 0, len = favList.length; i<len; i++) {
                if(favList[i].id=== tgtGif.id) {
                    isFav = true;
                }
            }
            //isFav = favList.filter(fav => fav.id === tgtGif.id).length === 1 ? true : false;
        }
        return (<GifDetailViewStyled>
            <FavButton
                faved={isFav}
                onClick={event => {
                    if (!isFav) {
                        this.props.addFavorite(tgtGif);
                    } else {
                        this.props.removeFavorite(tgtGif.id);
                    }
                }}>FavMe</FavButton>
            <img src={tgtGif.images.original.url} title={tgtGif.title} alt={tgtGif.title} />
        </GifDetailViewStyled>)
    }
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

export {
    GifDetailView
}

export default connect(mapStateToProps, mapDispatchToProps)(GifDetailView);