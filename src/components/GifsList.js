import React from 'react';
import GifCard from './GifCard';

const GifsList = (props) => {

    const renderListGifCard = () => {
        const { gifs } = props;
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
