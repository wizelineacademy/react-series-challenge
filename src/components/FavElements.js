import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {loadFavGifs} from "../actions/favGifs";
import ElementList from "./ElementList";

class FavElements extends Component{

    componentDidMount() {
        this.props.loadFavGifs();

    }

    render(){
        return (
            <div>
                <h4>Fav Gifs View!</h4>
                <ElementList all={this.props.favGifs.favs} search={this.props.favGifs.searchFavs} />
            </div>
        );
    }

}

//Set the main stage to props i need to use on this component
const mapStateToProps = (state) => {
    const {
        favGifs,
    } = state;

    return {
        favGifs,
    };
};

//Set the acction is going to be trigerred on this component
const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        loadFavGifs,
    }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(FavElements);