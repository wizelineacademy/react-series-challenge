import React, { Component } from 'react';
import { Container, Col } from './Grid.styled';
import { GifsRow, GifCard, LikeButton, FullWidthGif, GifTitle } from './GifList.styled'

class GifList extends Component {
  render() {
    const { gifs } = this.props;
    return (
      <Container>
        <GifsRow>
          {(gifs && Object.keys(gifs).length > 0) ?
            Object.keys(gifs).map((key) => {
              const gif = gifs[key];
              const { images } = gif;
              const { fixed_width: image } = images;
              return (
                <Col size="3" key={gif.id}>
                  <GifCard>
                    <LikeButton
                      liked={gif.liked}
                      onClick={() => this.props.onLikeClick(gif)}
                    >
                      <i className="fas fa-heart" />
                    </LikeButton>
                    <FullWidthGif src={image.url} />
                    <GifTitle><span>{gif.title}</span></GifTitle>
                  </GifCard>
                </Col>
              )
            })
            :
            <h4>Not Found Gifs</h4>
          }
        </GifsRow>
      </Container>
    );
  }
}

export default GifList;