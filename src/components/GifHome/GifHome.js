import React from 'react';
import GifCards from '../../components/GifCards/GifCards';

const GifHome = (props) => {

    /*
    handleOnLoad = () => {
        this.setState({ isLoading: false });
        //console.log("cargado");
    }

    handleError = () => {
        console.log("Error")
    }*/


    // Apply destructuring
    //let arrays = null;
    let { gifData } = props;
        
    /*
    if(gifsObjects !== null){
        arrays = Object.keys(gifsObjects).map((key, index) => {
            let { id } = gifsObjects[index]; 
            let { url } = gifsObjects[index].images.downsized;

            //return (<img key = {id} src = {url} alt = "Cargando..." />);
            return (<GifCards key = {id} imageUrl = {url} />);
        });
        //console.log(arrays.length);
        if(arrays.length === 0){
            arrays = <h1> No results :( </h1>;
        }
    } */

    return(
    <div>
        <input 
        type="text" 
        placeholder = "Search for awesome gifs" 
        onChange = {(event) => {props.updateState(event.target.value)}} />

        <button
        onClick = { props.handleSearch } > Busca Gifs </button>

        <br />

        <GifCards 
        gifData = {gifData} 
        loadError = {this.handleError} 
        loadSuccess = {this.handleOnLoad} />
    </div>)
    
}

export default GifHome;