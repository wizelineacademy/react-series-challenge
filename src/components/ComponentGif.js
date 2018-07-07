import React from 'react';

const ComponentGif = (index, image) => {
    return (<div key={index} className='container-gif'>
        <button className="icon">add</button>
        <img src={image.url} width='100%' height={120} />
    </div>);
};

export default ComponentGif;