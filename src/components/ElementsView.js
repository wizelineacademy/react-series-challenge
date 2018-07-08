import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {loadAllGifs} from "../actions/allGifs";
import ElementList from "./ElementList";

class ElementsView extends Component{

    componentDidMount() {
        this.props.loadAllGifs();
    }

    render(){
        return (
            <div>
                <h4>Main Gifs View!</h4>
                <ElementList elements={this.props.allGifs}/>
            </div>
        );
    }

}

//Set the main stage to props i need to use on this component
const mapStateToProps = (state) => {
    const {
        allGifs,
    } = state;

    return {
        allGifs,
    };
};

//Set the acction is going to be trigerred on this component
const mapDispatchToProps = (dispatch) => {

    return bindActionCreators({
        loadAllGifs,
    }, dispatch);

};

export default connect(mapStateToProps, mapDispatchToProps)(ElementsView);