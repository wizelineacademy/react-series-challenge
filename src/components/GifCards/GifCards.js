import React from 'react';
import GifCard from '../GifCards/GifCard/GifCard'
import GifCardControls from '../GifCards/GifCardControls/GifCardControls'
import './GifCards.css';

const GifCards = (props) => {

        let arrays = null;
        const { gifData, searchedValue, addRemoveGif } = props; 
        //console.log("Card props", props);

        if(gifData !== null && gifData !== undefined){
            arrays = Object.keys(gifData).map((key, index) => {
                let { id, url, isFavorite } = gifData[index];
                return (
                <div key = {id} className = "GifCards">
                    <GifCard imageUrl = {url}/>

                    <GifCardControls 
                    key = {index} 
                    addRemoveGif = {() => addRemoveGif({ id: id, searchedValue: searchedValue, url: url})} 
                    isFavorite = {isFavorite} />
                </div>);
            });

            if(arrays.length === 0){
                arrays = <h1> No results :( </h1>;
            }
        }

        return(
            <div className = "GifCards">
                { arrays }
            </div>
        )
    
}

export default GifCards;