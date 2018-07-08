import React, { Component, Fragment } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GifElement from './GifElement';
import gifListActions from '../actions/gifList';


class GifList extends Component {
    componentDidMount() {
        const { getTrendingGifs } = this.props;
        getTrendingGifs();
    }

    render() {
        const { gifList } = this.props;
        const { data } = gifList;
        return (
            <Fragment>
                {data.map(
                    (gif) => {
                        return (
                            <GifElement gif={gif.images.preview_gif.url} id={gif.id} key={gif.id}/>
                        );
                    }
                )}
            </Fragment>
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