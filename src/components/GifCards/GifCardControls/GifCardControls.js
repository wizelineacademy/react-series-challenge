import React from 'react';

const GifCardControls = (props) => {
    return(
        <div>
            <button onClick = {props.searchedGifs}> Favorito </button>
        </div>
    );
}

export default GifCardControls;