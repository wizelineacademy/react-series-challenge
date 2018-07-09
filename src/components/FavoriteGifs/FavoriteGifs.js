import React, { Component } from 'react';
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import favoriteGifsActions from "../../actions/favoriteGifs";
import GifsList from '../GifsList/GifsList';

class FavoriteGifs extends Component {

    componentDidMount() {
        this.props.fetchFavoriteGifs();
    }

    render(){

        const { favs, filtered } = this.props;

        return (
            <GifsList mainGifs={favs} secondaryGifs={filtered}/>
        );
    }

}

const mapStateToProps = (state) => {

    const { favs, filtered } = state.favoriteGifs;

    return {
        favs,
        filtered,
    };
};

const mapDispatchToProps = (dispatch) => {

    const { fetchFavoriteGifs } = favoriteGifsActions.creators;

    return bindActionCreators({
        fetchFavoriteGifs,
    }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteGifs);
