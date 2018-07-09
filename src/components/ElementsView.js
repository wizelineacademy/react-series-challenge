import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {loadAllGifs} from '../actions/allGifs';
import ElementList from './ElementList';
import SearchBar from './SearchBar';

class ElementsView extends Component{

    componentDidMount() {
        this.props.loadAllGifs();
    }

    render(){
        return (
            <div>
                <h2>Type to search for gifs</h2>
                <SearchBar />
                <h4>Main Gifs View!</h4>
                <ElementList all={this.props.allGifs} search={this.props.searchGifs} />
            </div>
        );
    }

}

//Set the main stage to props i need to use on this component
const mapStateToProps = (state) => {
    const {
        allGifs,
        searchGifs
    } = state;

    return {
        allGifs,
        searchGifs
    };
};

//Set the acction is going to be trigerred on this component
const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        loadAllGifs,
    }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(ElementsView);