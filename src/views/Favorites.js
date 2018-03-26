import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Utils from '../utils/Utils';

import favoritesActions from '../actions/favorites';
import ListGifs from '../components/ListGifs';

class ViewFavorites extends Component {

    componentDidMount() {
        this.props.getFavoritesList();
    }

    render() {
        console.log(this.props.favorites)
        const { list } = this.props.favorites;
        let listView = <ListGifs dataSource="favorites" />;

        if (!list) {
            listView = null;
        }
        return (
            <div>
                {listView}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favorites
    }
}

const mapDispatchToProps = (dispatch) => {
    const { getFavoritesList } = favoritesActions.creators;

    return bindActionCreators({
        getFavoritesList
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewFavorites);