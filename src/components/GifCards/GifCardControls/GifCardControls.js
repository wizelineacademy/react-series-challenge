import React from 'react';
import { StyledGifCardControls, StyledButton } from './GifCardControls.styled';

const GifCardControls = (props) => {
    //console.log("props", props);

    return(
        <StyledGifCardControls>
            <StyledButton active onClick = {props.addRemoveGif}> {props.isFavorite ? <h1>😢 Remove me 😢</h1> : <h1>✨ Fav me! ✨</h1>} </StyledButton>
        </StyledGifCardControls>
    );
}

export default GifCardControls;