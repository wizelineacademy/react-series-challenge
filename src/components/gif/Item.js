import React from 'react';
import './Item.css';

const Item = ({ data, toggleFavorite, isFavorite }) => {
  const favorite = isFavorite ? 'Favorite' : 'No Favorite';

  const textButton = isFavorite ? 'Remove from Favorites' : 'Add to Favorites';
  return (
    <div className="gif">
      <figure>
        <img src={data.images.original.webp} alt={data.title} />
        <figcaption>{favorite}</figcaption>
      </figure>

      <button onClick={() => toggleFavorite({ gif: data, isFavorite })}>
        {textButton}
      </button>
    </div>
  );
};

export default Item;
