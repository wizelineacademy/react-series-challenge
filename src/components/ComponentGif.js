import React from 'react';

const ComponentGif = (id, title, image, isFavorite, handleClick) => {
    return (<div key={id} className='container-gif'>
        {isFavorite ? <i className="fa fa-star icon"></i> : null}
        <img src={image.url} width='100%' height={120} onClick={handleClick} alt={title} />
    </div>);
};

export default ComponentGif;