import React from 'react';
import { Row, Col } from '../Grid';
import Gif from '../Gif';

const GifList = ({ elements, starred, handleToggleFav }) => {
  const gifs = elements.map(element => {
    const isStarred = Object.keys(starred).some(key => element.id === key);
    return (
      <Col span={4} key={`gif_id_${element.id}`}>
        <Gif
          gif={element}
          starred={isStarred}
          onToggleFavorite={handleToggleFav}
        />
      </Col>
    )
  });

  return (
    <Row>
      {gifs}
    </Row>
  )
}

export default GifList;
