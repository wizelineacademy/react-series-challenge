import React from 'react';
import GifCard from '../GifCard/GifCard';
import { CardsContainer } from './GifsList.styled';

const GifsList = (props) => {

    const secondaryGifsLength = props.secondaryGifs ? Object.keys(props.secondaryGifs).length : 0;

    const renderListGifCard = () => {
        const gifs = secondaryGifsLength > 0 ? props.secondaryGifs : props.mainGifs || {};
        return Object.keys(gifs).map((gifId) => <GifCard key={gifId} gif={gifs[gifId]}/>)
    };

    return (
        <CardsContainer>
            {renderListGifCard()}
        </CardsContainer>
    );

};

export default GifsList;
