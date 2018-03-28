/**
 * List component to show favorites or trending gifs according to the request
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import favoritesActions from '../../actions/favorites';

import { ListGifStyled, FavButton } from './ListGifs.styled';

class ListGifs extends Component {
    render() {
        const { dataSource } = this.props;
        const favList = this.props.favorites.originalList.data;
        let dataSourceObj = null;

        switch (dataSource) {
            case 'favorites':
                dataSourceObj = this.props.favorites;
                break
            default:
                dataSourceObj = this.props.giphy;
        }
        if (!dataSourceObj || !dataSourceObj.list) {
            return null;
        }
        if (dataSourceObj.list && dataSourceObj.fetching && dataSourceObj.success) {
            return <div>Cargando...</div>
        }
        return (
            <ListGifStyled>
                {dataSourceObj.list.data.map(item => {
                    let isFav = false
                    if (favList) {
                        isFav = favList.filter(fav => fav.id === item.id).length === 1 ? true : false;
                    }
                    return <li key={item.id}>
                        <FavButton
                            faved={isFav}
                            onClick={event => {
                                if (!isFav) {
                                    this.props.addFavorite(item);
                                } else {
                                    this.props.removeFavorite(item.id);
                                }
                            }}>FavMe</FavButton>
                            <Link to={'/gif/'+item.id}>
                                <img src={item.images.preview_gif.url} alt={item.title} />
                            </Link>
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

export {
    ListGifs
}

export default connect(mapStateToProps, mapDispatchToProps)(ListGifs);
