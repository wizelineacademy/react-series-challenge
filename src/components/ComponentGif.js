import React from 'react';

const ComponentGif = (index, image, isFavorite, handleClick) => {
    return (<div key={index} className='container-gif'>
        <button onClick={handleClick} className="icon">{isFavorite ? 'Remove' : 'Add'}</button>
        <img src={image.url} width='100%' height={120} />
    </div>);
};

export default ComponentGif;