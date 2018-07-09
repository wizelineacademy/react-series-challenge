import React from 'react';
import Item from './Item';

const List = ({ loading, gifs, favorites, toggleFavorite }) => {
  if (loading) {
    return <div>Loading trending gifs!</div>;
  }

  return Object.keys(gifs).map(id => {
    const gif = gifs[id];
    return (
      <Item
        key={id}
        data={gif}
        toggleFavorite={toggleFavorite}
        isFavorite={!!favorites[gif.id]}
      />
    );
  });
};

export default List;
