import React from 'react';

const GifCardControls = (props) => {
    return(
        <div className = "GifCardControls">
            <button onClick = {props.addRemoveGif}> Favorito </button>
        </div>
    );
}

export default GifCardControls;