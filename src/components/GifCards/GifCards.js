import React, {Component} from 'react';
import GifCard from '../GifCards/GifCard/GifCard'
import './GifCards.css';

class GifCards extends Component {

    constructor(props) {
        super(props);
        this.state = ({ isLoading: true });
    }

    render() {
        let arrays = null;

        const gifsObjects = this.props.gifData;
        console.log("Datos de gifs", gifsObjects)

        if(gifsObjects !== null){
            arrays = Object.keys(gifsObjects).map((key, index) => {
                let { id } = gifsObjects[index]; 
                let { url } = gifsObjects[index].images.downsized;

                console.log("url: " + url);

                //return (<img key = {id} src = {url} alt = "Cargando..." />);
                return (<GifCard 
                    key = {id} 
                    imageUrl = {url} />);
            });
            //console.log(arrays.length);
            if(arrays.length === 0){
                arrays = <h1> No results :( </h1>;
            }
        }

        /*
        if(this.state.isLoading) {
            image = <p> Cargando imagen... </p>
        } else {
            //TODO: Spinner
            loading = <p> Cargando </p>
            image = <img src = {this.props.imageUrl} onLoad = {this.handleOnLoad} onError = {this.handleError} />
        }*/

        return(
            <div className = "GifCards">
                { arrays }
            </div>
        )
    }
}

export default GifCards;