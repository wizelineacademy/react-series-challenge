import React, { Component } from 'react';
import './GifCard.css';

class GifCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
        };
    }

    handleOnLoad = () => {
        this.setState({ isLoading: false });
        console.log("cargado");
    }

    handleError = () => {
        console.log("Error")
    }

    render() {
        let image = null;

        if(this.state.isLoading) {
            image = <p> Cargando imagen... </p>
        } else {
            //TODO: Spinner
            image = <p> Cargada </p>
            //image = <img src = {this.props.imageUrl} onLoad = {this.handleOnLoad} onError = {this.handleError} />
        }

        return (
            <div>
                <img src = {this.props.imageUrl} onLoad = {this.handleOnLoad} onError = {this.handleError} />
                { image }
            </div>
        )
    }
}

export default GifCard;