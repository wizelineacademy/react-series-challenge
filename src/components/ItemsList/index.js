import React from 'react';
import { connect } from 'react-redux';

const ItemsList = ({ currentItemsList, favoritesButton }) => {
  const items = currentItemsList.map((image, index) => {
    return (
      <div key={image.id}>
        <img src={image.images.original.url} alt={`hi`} />
        <button onClick={favoritesButton.bind(this, { image, index })}>
          Make me your favorite
        </button>
        {image.favorite ? 'Added to Favorites' : null}
      </div>
    );
  });
  return <div>{items}</div>;
};

const mapStateToProps = ({ itemsList }) => {
  const { currentItemsList } = itemsList;
  return { currentItemsList };
};

export default connect(mapStateToProps)(ItemsList);
export { ItemsList };
