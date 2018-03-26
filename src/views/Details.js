import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import giphyActions from '../actions/giphy';
import favoritesActions from '../actions/favorites';

class Details extends Component {

    componentDidMount() {
        
    }

    render() {
        return(
            'Gif details'
        );
    }
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favorites
    }
}

const mapDispatchToProps = (dispatch) => {
    const {  getById } = giphyActions.creators;
    const { getFavoritesList } = favoritesActions.creators;

    return bindActionCreators({
        getById,
        getFavoritesList
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);