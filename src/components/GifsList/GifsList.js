import React from 'react';
import GifCard from '../GifCard/GifCard';

const GifsList = (props) => {

    const searchGifsLength = Object.keys(props.searchGifs).length;

    const renderListGifCard = () => {
        const gifs = searchGifsLength > 0 ? props.searchGifs : props.trendGifs;
        return Object.keys(gifs).map((gifId) => <GifCard key={gifId} gif={gifs[gifId]}/>)
    };

    return (
      <div>
          <h5>Gifs List</h5>
          {renderListGifCard()}
      </div>
    );

};

export default GifsList;
