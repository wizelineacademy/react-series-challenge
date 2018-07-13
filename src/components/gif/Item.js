import React from 'react';
import { Item, FavoriteButton } from './Item.style';

export default ({ data, toggleFavorite, isFavorite }) => {
  return (
    <Item>
      <figure>
        <img src={data.images.original.webp} alt={data.title} />
        <figcaption>
          <FavoriteButton
            favorite={isFavorite}
            onClick={() => toggleFavorite({ gif: data, isFavorite })}
          />
          <p>{data.title}</p>
        </figcaption>
      </figure>
    </Item>
  );
};
