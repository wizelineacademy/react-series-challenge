import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import trendingActions from '../actions/trending';
import ListGifs from '../components/ListGifs';

class ViewHome extends Component {
    componentWillMount() {
        this.props.getTrendingList();
    }
    render() {
        const { list, fetching, success } = this.props.trending;
        if (!list) {
            return null;
        }
        if (list && fetching && success) {
            return <div>Cargando...</div>
        }
        if (list && !fetching && !success) {
            return <div>Algo salió mal...</div>
        }
        return (
            <ListGifs />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        trending: state.trending
    }
}

const mapDispatchToProps = (dispatch) => {
    const { getTrendingList } = trendingActions.creators;
    return bindActionCreators({
        getTrendingList
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewHome);