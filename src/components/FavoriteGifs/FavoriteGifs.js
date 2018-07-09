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
        return (
            <GifsList mainGifs={this.props.favoriteGifs}/>
        );
    }

}

const mapStateToProps = (state) => {
    const {
        favoriteGifs,
    } = state;

    return {
        favoriteGifs,
    };
};

const mapDispatchToProps = (dispatch) => {

    const { fetchFavoriteGifs } = favoriteGifsActions.creators;

    return bindActionCreators({
        fetchFavoriteGifs,
    }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(FavoriteGifs);
