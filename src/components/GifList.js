import React, { Component } from 'react';
import { Container, Row, Col } from './Grid.styled';
import styled from 'styled-components';

const FullWidthGif = styled.div`
  display: block;
  height: 100%;
  width: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 1rem;
`;

const LikeButton = styled.button`
  position: absolute;
  display: none;
  cursor: pointer;
  top: 15px;
  right: -10px;
  background-color: white;
  border: none;
  border-radius: 1rem;
  box-shadow: 3px 3px 57px -5px rgba(0,0,0,0.6);
  height: 1.5rem;
  width: 2.6rem;
  color:  ${(props) => props.liked ? '#ea0e24' : '#cfcfcf'};
  &:focus{
    outline: none;
  }
`;

const GifCard = styled.div`
  position: relative;
  height: 12rem;
  width: 100%;
  background-color: #fff;
  border-radius: 1rem;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    & ${LikeButton} {
      display: block;
    }
  }
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
          {gifs && Object.keys(gifs).map((key) => {
            const gif = gifs[key];
            const { images } = gif;
            const { fixed_width: image } = images;
            return (
              <Col size="3" key={gif.id}>
                <GifCard>
                  <FullWidthGif src={image.url} />
                  <LikeButton
                    liked={gif.liked}
                    onClick={() => this.props.onLikeClick(gif)}
                  >
                    <i className="fas fa-heart" />
                  </LikeButton>
                </GifCard>
              </Col>
            )
          })}
        </GifsRow>
      </Container>
    );
  }
}

export default GifList;