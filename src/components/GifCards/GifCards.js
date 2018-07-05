import React, {Component} from 'react';
import './GifCard.css';

class GifCard extends Component {

    constructor(props) {
        super(props);
        this.state = ({ isLoading: true });
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
        let loading = null;

       // if(this.state.isLoading) {
        //    image = <p> Cargando imagen... </p>
        //} else {
            // TODO: Spinner
            loading = <p> Cargando </p>
            image = <img src = {this.props.imageUrl} onLoad = {this.handleOnLoad} onError = {this.handleError} />
       // }

        return(
            <div className = "GifCards">
                { image }
                { this.state.isLoading ? loading : null }
            </div>
        )
    }
}

export default GifCard;