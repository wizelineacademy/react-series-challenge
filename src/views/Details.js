import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import giphyActions from '../actions/giphy';
import favoritesActions from '../actions/favorites';

import GifDetailView from '../components/GifDetailView';

class Details extends Component {

    componentWillMount() {
        this.props.getById(this.props.match.params.gifId);
        this.props.getFavoritesList();
    }

    render() {
        const { list, fetching, success } = this.props.giphy;
        if (!list || list.data.length > 1) {
            return null;
        }
        if (!list && fetching && success) {
            return <div>Cargando...</div>
        }
        if (list && !fetching && !success) {
            return <div>Algo salió mal...</div>
        }
        return (
            <div>
                <h2>{list.data[0].title}</h2>
                <GifDetailView />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        giphy: state.giphy
    }
}

const mapDispatchToProps = (dispatch) => {
    const { getById } = giphyActions.creators;
    const { getFavoritesList } = favoritesActions.creators;

    return bindActionCreators({
        getById,
        getFavoritesList
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);