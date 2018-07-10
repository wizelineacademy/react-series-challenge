import React from 'react';
import { ContentGif, Icon, Image, ImageDescription, } from '../styles/Image.style';

const ComponentGif = (id, title, image, isFavorite, handleClick) => {
    return (<ContentGif key={id}>
        {isFavorite ? <Icon className="fa fa-star icon"></Icon> : null}
        <Image src={image.url} onClick={handleClick} alt={title} />
        <ImageDescription>{title}</ImageDescription>
    </ContentGif>);
};

export default ComponentGif;