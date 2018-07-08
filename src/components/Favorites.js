import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GifElement from './GifElement';
import favoritesActions from '../actions/favorites';


class Favorites extends Component {
    componentDidMount() {
        const { getFavoritesGifs, favoriteIds } = this.props;
        getFavoritesGifs(favoriteIds);
    }

    render() {
        const { data } = this.props;
        return (
            <Fragment>
                {data.map(
                    (gif) => {
                        return (
                            <GifElement gif={gif.images.preview_gif.url} id={gif.id} key={gif.id}/>
                        );
                    }
                )}
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    const { favorites } = state;
    const { favoriteIds, data } = favorites;
    return {
        favoriteIds,
        data
    }
};

const mapDispatchToProps = (dispatch) => {
    const { getFavoritesGifs } = favoritesActions.creators;
    return bindActionCreators({ getFavoritesGifs }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);