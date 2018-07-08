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
                <GifsList gifs={this.props.trendGifs}/>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    const {
        trendGifs,
    } = state;

    return {
        trendGifs,
    };
};

const mapDispatchToProps = (dispatch) => {

    const { loadTrendGifs } = trendGifsActions.creators;

    return bindActionCreators({
        loadTrendGifs,
    }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(MainGifsView);