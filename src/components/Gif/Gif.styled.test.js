import React from 'react';
import {
  MasonryItem,
  ImageWrapper,
  GifImg,
  GifTitle,
  Overlay
} from './Gif.styled';
import renderer from 'react-test-renderer';

describe('Gif styled components', () => {
  it('masonry item renders correctly', () => {
    const tree = renderer
      .create(<MasonryItem>Child</MasonryItem>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('masonry item renders fullWidth prop correctly', () => {
    const tree = renderer
      .create(<MasonryItem fullWidth={true}>Child</MasonryItem>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('image wrapper renders correctly', () => {
    const tree = renderer
      .create(<ImageWrapper>Child</ImageWrapper>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('gif img renders correctly', () => {
    const tree = renderer
      .create(<GifImg />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('gif img renders isFavorited prop correctly', () => {
    const tree = renderer
      .create(<GifImg isFavorited={true} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('gif title renders correctly', () => {
    const tree = renderer
      .create(<GifTitle>Child</GifTitle>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('gif title renders correctly', () => {
    const tree = renderer
      .create(<GifTitle isInDetail={true}>Child</GifTitle>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('overlay renders correctly', () => {
    const tree = renderer
      .create(<Overlay>Child</Overlay>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
