import React from 'react';
import GifCard from '../GifCard/GifCard';
import { CardsContainer } from './GifsList.styled';

const GifsList = (props) => {

    const searchGifsLength = props.searchGifs ? Object.keys(props.searchGifs).length : 0;

    const renderListGifCard = () => {
        const gifs = searchGifsLength > 0 ? props.searchGifs : props.mainGifs || {};
        return Object.keys(gifs).map((gifId) => <GifCard key={gifId} gif={gifs[gifId]}/>)
    };

    return (
        <CardsContainer>
            {renderListGifCard()}
        </CardsContainer>
    );

};

export default GifsList;
