import React from 'react';
import GifCard from '../GifCards/GifCard/GifCard'
import './GifCards.css';

const GifCards = (props) => {

        let arrays = null;
        const gifsObjects = props.gifData;  
        console.log("GIFS DATA", gifsObjects); 

        if(gifsObjects !== null && gifsObjects !== undefined){
            arrays = Object.keys(gifsObjects).map((key, index) => {
                let { id, url } = gifsObjects[index];

                //console.log("url: " + url);
                //return (<img key = {id} src = {url} alt = "Cargando..." />);
                return (<GifCard 
                    key = {id} 
                    //loadError = {props.loadError}
                    //loadSuccess = {props.loadSuccess}
                    imageUrl = {url} />);
            });

            //console.log("Arreglo" , arrays[0]);
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

export default GifCards;