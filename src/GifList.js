import React, { Component } from 'react';
import { Container, Row, Col } from './Grid.styled';
import styled from 'styled-components';

const FullWidthImg = styled.img`
  display: block;
  margin: auto;
  padding: 1rem;
`;

const GifsRow = Row.extend`
  margin-top: 5rem;
`;

class GifList extends Component {
  render() {
    const { gifs } = this.props;
    return (
      <Container>
        <GifsRow>
          {gifs && gifs.map((gif) => {
            const { images } = gif;
            const { fixed_width: image } = images;
            return (
              <Col size="3">
                <FullWidthImg src={image.url} />
              </Col>
            )
          })}
        </GifsRow>
      </Container>
    );
  }
}

export default GifList;