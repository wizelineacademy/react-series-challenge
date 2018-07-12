import React from 'react';
import PropTypes from 'prop-types';
import GifItem from '../../containers/GifItem';
import GifErrorBoundary from '../GifErrorBoundary';
import styled from 'styled-components';

const ItemsWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 90%;
  margin: 0 auto;
  width: 1020px;
`;

const GifsList = ({ gifs, loading }) => {
  return (
    <ItemsWrapper>
      {gifs.map(gif => (
        <GifErrorBoundary key={gif.id}>
          <GifItem id={gif.id} gif={gif} />
        </GifErrorBoundary>
      ))}
    </ItemsWrapper>
  );
};

GifsList.propTypes = {
  gifs: PropTypes.array.isRequired,
  loading: PropTypes.bool,
};

export default GifsList;
