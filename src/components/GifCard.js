import React from 'react';

const GifCard = (props) => {

    const { gif } = props;
    
    return (
        <div>
            <h6>Gif Card</h6>
            <p>{gif.title || 'GIF NO NAME'}</p>
        </div>
    );

};

export default GifCard;
