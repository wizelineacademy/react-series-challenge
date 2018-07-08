import React from 'react';
import { GifContainer, Gif, GifOverlay } from './GifCard.styled';
const GifCard = (props) => {

    const { gif } = props;
    
    return (
        <GifContainer>
            <Gif src={gif.images.original.webp} />
            <GifOverlay />
        </GifContainer>
    );

};

export default GifCard;
