import React from 'react';
import GifCard from '../GifCard/GifCard';
import { CardsContainer } from './GifsList.styled';

const GifsList = (props) => {

    const searchGifsLength = Object.keys(props.searchGifs).length;

    const renderListGifCard = () => {
        const gifs = searchGifsLength > 0 ? props.searchGifs : props.trendGifs;
        return Object.keys(gifs).map((gifId) => <GifCard key={gifId} gif={gifs[gifId]}/>)
    };

    return (
        <CardsContainer>
            {renderListGifCard()}
        </CardsContainer>
    );

};

export default GifsList;
