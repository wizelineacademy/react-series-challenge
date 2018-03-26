import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Utils from '../utils/Utils';


import giphyActions from '../actions/giphy';
import favoritesActions from '../actions/favorites';
import ListGifs from '../components/ListGifs';
import SearchField from '../components/SearchField';

class ViewHome extends Component {
    constructor(props) {
        super(props);
        this.callAction = Utils.debounce(this.callAction, 500);
    }
    callAction(val) {
        if (!/^\s*$/.test(val)) {
            this.props.getSearchList(val);
        } else {
            this.props.getTrendingList();
        }
    }
    componentDidMount() {
        this.props.getFavoritesList();
        if (this.props.giphy.query && !/^\s*$/.test(this.props.giphy.query)) {
            this.props.getSearchList(this.props.giphy.query);
        } else {
            this.props.getTrendingList();
        }
    }
    render() {
        const { list, fetching, success, query } = this.props.giphy;
        let listView = <ListGifs />;
        if (!list) {
            listView = null;
        }
        if (list && fetching && success) {
            listView = <div>Cargando...</div>
        }
        if (list && !fetching && !success) {
            listView = <div>Algo salió mal...</div>
        }
        return (
            <div>
                <SearchField
                    defaultValue={query}
                    type="text"
                    placeholder="Search gifs"
                    onChange={event => {
                        this.callAction(event.target.value, 1500);
                    }}
                />
                {listView}
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        giphy: state.giphy
    }
}

const mapDispatchToProps = (dispatch) => {
    const { getTrendingList, getSearchList } = giphyActions.creators;
    const { getFavoritesList } = favoritesActions.creators;

    return bindActionCreators({
        getTrendingList,
        getSearchList,
        getFavoritesList
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewHome);