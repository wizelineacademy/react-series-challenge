import React from 'react';
import { ListWrapperStyled, ListItemStyled } from '../../styled/ContainersStyled'
import { ImgStyled } from '../../styled/ImgStyled';
import { Link } from 'react-router-dom';

const ImagesList = (props) => {
  const { list, buttonClick } = props
  const items = list.map((image) => {
    return (
      <ListItemStyled key={image.id}>
        <Link to={`/image/${image.id}`}>
          <ImgStyled
            src={image.images.original.url}
            alt={`hi`}
          />
        </Link>
        <button onClick={buttonClick.bind(this,{ image })}>Add to Favorites</button>
        {image.favorite ? 'soy favorito!' : null}
      </ListItemStyled>
    );
  });
  return (
    <ListWrapperStyled>
      {items}
    </ListWrapperStyled>
  )
}

export default ImagesList;