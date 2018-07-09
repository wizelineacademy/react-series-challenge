import React from 'react';
import './GifCard.css';

const GifCard  = (props) => {

    /*let image = null;

    if(props.isLoading) {
        console.log("Cargando imagen")
        image = <p> Cargando imagen... </p>
    } else {
        //TODO: Spinner
        image = <p> Cargada </p>
        console.log("Cargada")
        //image = <img src = {this.props.imageUrl} onLoad = {this.handleOnLoad} onError = {this.handleError} />
    }*/

    return (
        <div className = "GifCard">
            <img 
            src = {props.imageUrl} 
            alt = "Loading Great Gif :D ..."
            //onLoad = {console.log("Hey, I loaded!")} 
            //onError = {props.loadError} 
            />
        </div>
    )
    
}

export default GifCard;