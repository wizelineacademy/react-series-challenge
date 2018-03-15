import React from 'react';
import renderer from 'react-test-renderer';
import {GifCard} from "../../../components/GifCard";

const mockGif = {
  id: 'p3n7NWvfz3u0c1meay',
  images: {
    original: 'https://media3.giphy.com/media/p3n7NWvfz3u0c1meay/giphy.gif',
    small: 'https://media3.giphy.com/media/p3n7NWvfz3u0c1meay/200w_d.gif'
  }
};

describe('GifCard component', () => {
  it('should render', () => {
    const component = renderer.create(
      <GifCard
        gif={mockGif}
        isFavorite={false}
        isDetailBtnVisible={false}
        imageSize={'small'}
        toggleFavorite={() => {}}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should not render visible btn', () => {
    const component = renderer.create(
      <GifCard
        gif={mockGif}
        isFavorite={false}
        isDetailBtnVisible
        imageSize={'small'}
        toggleFavorite={() => {}}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render filled heart', () => {
    const component = renderer.create(
      <GifCard
        gif={mockGif}
        isFavorite
        isDetailBtnVisible
        imageSize={'small'}
        toggleFavorite={() => {}}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render the big image', () => {
    const component = renderer.create(
      <GifCard
        gif={mockGif}
        isFavorite
        isDetailBtnVisible
        imageSize={'original'}
        toggleFavorite={() => {}}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
