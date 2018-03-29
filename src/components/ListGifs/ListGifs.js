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

    checkIsFav(tgId){
        for(let i=0, len = this.props.favorites.originalList.data.length; i<len; i++){
            if(this.props.favorites.originalList.data[i].id === tgId) {
                return true;
            }
        }
        return false;
    }

    render() {
        const { dataSource } = this.props;
        let dataSourceObj = null;
        let listObj = [];

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
        if (dataSourceObj.list && dataSourceObj.fetching) {
            return <div>Cargando...</div>
        }
        
        for(let i = 0, len=dataSourceObj.list.data.length; i<len; i++){
            const item = dataSourceObj.list.data[i];
            let isFav = false
            if (this.props.favorites.originalList.data) {
                isFav = this.checkIsFav(item.id);
            }
            listObj.push(<li key={item.id}>
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
            </li>);
        }
        return (
            <ListGifStyled>
                {listObj}
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
