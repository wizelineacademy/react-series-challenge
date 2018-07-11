import React from 'react';
import Item from './Item';
import { List } from './List.style';

export default ({ loading, gifs, favorites, toggleFavorite }) => {
  if (loading) {
    return <div>Loading trending gifs!</div>;
  }

  const items = Object.keys(gifs).map(id => {
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

  return <List>{items}</List>;
};
