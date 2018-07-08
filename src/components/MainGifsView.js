import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import GifsList from './GifsList';
import trendGifsActions from "../actions/trendGifs";

class MainGifsView extends Component{

    componentDidMount() {
        this.props.loadTrendGifs();
    }

    render(){

        return (
            <div>
                <h4>Main Gifs View!</h4>
                <GifsList trendGifs={this.props.trendGifs} searchGifs={this.props.searchGifs}/>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    const {
        trendGifs,
        searchGifs
    } = state;

    return {
        trendGifs,
        searchGifs,
    };
};

const mapDispatchToProps = (dispatch) => {

    const { loadTrendGifs } = trendGifsActions.creators;

    return bindActionCreators({
        loadTrendGifs,
    }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(MainGifsView);