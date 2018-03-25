import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import favoritesActions from '../../actions/favorites';

import { ListGifStyled, FavButton } from './ListGifs.styled';

class ListGifs extends Component {
    render() {
        const { dataSource } = this.props;
        const { list } = this.props.giphy;
        const favList = this.props.favorites.list;

        if (!list) {
            return null;
        }
        switch (dataSource) {
            default:
        }
        return (
            <ListGifStyled>
                {list.data.map(item => {
                    let isFav = false
                    if(favList) {
                        isFav = favList.filter(fav => fav.id === item.id).length === 1 ? true : false;
                    }
                    return <li key={item.id}>
                        <FavButton
                            faved={isFav}
                            onClick={event => {
                                if(!isFav) {
                                    this.props.addFavorite(item);
                                }else{
                                    this.props.removeFavorite(item.id);
                                }
                            }}>FavMe</FavButton>
                        <img src={item.images.preview_gif.url} alt={item.title} />
                    </li>;
                })}
            </ListGifStyled>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        giphy: state.giphy,
        favorites: state.favorites
    };
}

const mapDispatchToProps = (dispatch) => {
    const { addFavorite, removeFavorite } = favoritesActions.creators;

    return bindActionCreators({
        addFavorite,
        removeFavorite
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListGifs);
