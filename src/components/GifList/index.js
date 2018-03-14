import React from 'react';
import { Row, Col } from '../Grid';
import Gif from '../Gif';

const GifList = ({ elements }) => {
  console.log(elements);
  const gifs = elements.map(element => (
    <Col span={4} key={`gif_id_${element.id}`}>
      <Gif {...element} />
    </Col>
  ));

  return (
    <Row>
      {gifs}
    </Row>
  )
}

export default GifList;
