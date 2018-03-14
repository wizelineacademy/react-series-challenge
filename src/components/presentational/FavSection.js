import React from 'react';
import styled from 'styled-components';

const Favorite = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const FavSection = ({ inFavs, clickHandler }) => {
  const img = (inFavs) ? '/favOn.png' : '/favOff.png';
  const text = (inFavs) ? 'Remove from favorites' : 'Add to favorites';

  return (
    <Favorite onClick={clickHandler} >
      <img src={img} height="15" alt={text} /> {text}
    </Favorite>
  );
}

export default FavSection;