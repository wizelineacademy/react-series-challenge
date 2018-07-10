import React from 'react';

const GifCardControls = (props) => {
    //console.log("props", props);

    return(
        <div className = "GifCardControls">
            <button onClick = {props.addRemoveGif}> {props.isFavorite ? <h1>Quitar Favorito</h1> : <h1>Poner Favorito</h1>} </button>
        </div>
    );
}

export default GifCardControls;