import React from 'react';
import { StyledGifCard, StyledImage } from './GifCard.styled'

const GifCard  = (props) => {

    return (
        <StyledGifCard>
            <StyledImage 
            src = {props.imageUrl} 
            alt = "Loading Great Gif :D ..."
            />
        </StyledGifCard>
    )
    
}

export default GifCard;