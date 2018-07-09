import React from 'react';
import { connect } from 'react-redux';

import GifCard from './GifCard';

const GifGrid = (props) => {
  var { gifs } = props;

  return (
    <div className="GifGrid mt">
      {
        gifs.map((gif) =>
          <GifCard key={gif.id} {...gif} />
        )
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  const { gifs } = state;

  return {
    gifs
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(GifGrid);
