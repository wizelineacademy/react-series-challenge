import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Utils from '../utils/Utils';

import favoritesActions from '../actions/favorites';
import ListGifs from '../components/ListGifs';
import SearchField from '../components/SearchField';


class ViewFavorites extends Component {

    componentWillMount() {
        this.props.getFavoritesList();
        this.callAction = Utils.debounce(this.callAction, 500);
    }

    callAction(val) {
        if (!/^\s*$/.test(val)) {
            this.props.filterFavorite(val);
        } else {
            this.props.filterFavorite();
        }
    }

    render() {
        const { list, query } = this.props.favorites;
        let listView = <ListGifs dataSource="favorites" />;

        if (!list) {
            listView = null;
        }
        return (
            <div>
                <SearchField
                    defaultValue={query}
                    type="text"
                    placeholder="Filter gifs"
                    onChange={event => {
                        this.callAction(event.target.value, 1500);
                    }}
                />
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
    const { getFavoritesList, filterFavorite } = favoritesActions.creators;

    return bindActionCreators({
        getFavoritesList,
        filterFavorite
    }, dispatch);
}

export {
    ViewFavorites
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewFavorites);