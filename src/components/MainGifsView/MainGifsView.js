import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import GifsList from '../GifsList/GifsList';
import trendGifsActions from "../../actions/trendGifs";

class MainGifsView extends Component{

    componentDidMount() {
        const trendGifsLenght = Object.keys(this.props.trendGifs).length;
        if (trendGifsLenght === 0) {
            this.props.loadTrendGifs();
        }
    }

    render(){

        return (
            <GifsList mainGifs={this.props.trendGifs} secondaryGifs={this.props.searchGifs}/>
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