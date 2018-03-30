import React from 'react';
import {MasonryContainer} from './GifList.styled';
import renderer from 'react-test-renderer';

describe('Gif list styled components', () => {
  it('masonry container renders correctly', () => {
    const tree = renderer
      .create(<MasonryContainer>Child</MasonryContainer>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
