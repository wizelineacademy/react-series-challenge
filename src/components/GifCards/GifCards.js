import React from 'react';
import GifCard from '../GifCards/GifCard/GifCard'
import GifCardControls from '../GifCards/GifCardControls/GifCardControls'
import './GifCards.css';

const GifCards = (props) => {

        let arrays = null;
        const { gifData, searchedValue, searchedGifs } = props; 
        //console.log("props", props); 

        if(gifData !== null && gifData !== undefined){
            arrays = Object.keys(gifData).map((key, index) => {
                let { id, url } = gifData[index];

                console.log("url: " + url);
                //return (<img key = {id} src = {url} alt = "Cargando..." />);
                return (
                <div key = {id} className = "GifCards">
                <GifCard 
                    //loadError = {props.loadError}
                    //loadSuccess = {props.loadSuccess}
                    imageUrl = {url}
                     />
                    <GifCardControls key = {index} searchedGifs = {() => searchedGifs({ id: id, searchedValue: searchedValue, url: url})} />
                </div>);
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