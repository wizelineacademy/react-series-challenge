import React from 'react';
import { connect } from 'react-redux';
import { BurningEffect } from  './style.js'

const DEFAULT = 'Trending';

const Title = ({ searchTerm, children }) => {
  const content = children || `Displaying results for ${searchTerm || DEFAULT }`;
  return (
    <BurningEffect className='title-class'>
      { content }
    </BurningEffect>
  )
};

const mapStateToProps = (state) => {
  const { giphyReducer: { searchTerm } } = state;
  return {
    searchTerm,
  };
};

export default connect(mapStateToProps, null)(Title);
