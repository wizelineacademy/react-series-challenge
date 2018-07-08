import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import gifListActions from '../actions/gifList';

class GifList extends Component {
    componentDidMount() {
        const { getTrendingGifs } = this.props;
        getTrendingGifs();
    }

    render() {
        const { gifList } = this.props;
        return (
            <div>
                {JSON.stringify(gifList)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { gifList } = state;
    return {
        gifList,
    }
};

const mapDispatchToProps = (dispatch) => {
    const { getTrendingGifs } = gifListActions.creators;
    return bindActionCreators({ getTrendingGifs }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GifList);