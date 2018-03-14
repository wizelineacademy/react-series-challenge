import React from 'react';
import { Row, Col } from '../Grid';
import Gif from '../Gif';

const GifList = ({
  elements,
  starred,
  handleSetGif,
  handleToggleFav,
}) => {
  const gifs = elements.map(element => {
    const isStarred = Object.keys(starred).some(key => element.id === key);
    return (
      <Col span={2} key={`gif_id_${element.id}`}>
        <Gif
          gif={element}
          starred={isStarred}
          onClickImage={handleSetGif}
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
