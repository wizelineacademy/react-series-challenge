import React from 'react';
import { connect } from 'react-redux';
import GifsList from '../GifsList/GifsList';

const FavoriteGifs = (props) => {

    const { favs, filtered } = props;

    return (
        <GifsList mainGifs={favs} secondaryGifs={filtered}/>
    );

};

const mapStateToProps = (state) => {

    const { favs, filtered } = state.favoriteGifs;

    return {
        favs,
        filtered,
    };
};

export default connect(mapStateToProps)(FavoriteGifs);
