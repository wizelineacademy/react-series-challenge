import React from 'react';
import { Row, Col } from '../Grid';
import Gif from '../Gif';

const GifList = () => {
  return (
    <Row>
      <Col span={4}>
        <Gif />
      </Col>
      <Col span={4}>
        <Gif />
      </Col>
      <Col span={4}>
        <Gif />
      </Col>
    </Row>
  )
}

export default GifList;
