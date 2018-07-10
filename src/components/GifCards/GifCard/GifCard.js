import React from 'react';

const GifCard  = (props) => {

    return (
        <div className = "GifCard">
            <img 
            src = {props.imageUrl} 
            alt = "Loading Great Gif :D ..."
            />
        </div>
    )
    
}

export default GifCard;