import React from 'react';
import { shallow } from 'enzyme';
import GifGalleryContainer from '../GifGalleryContainer';

const mockGif = {
  id: 'p3n7NWvfz3u0c1meay',
  images: {
    original: 'https://media3.giphy.com/media/p3n7NWvfz3u0c1meay/giphy.gif',
    small: 'https://media3.giphy.com/media/p3n7NWvfz3u0c1meay/200w_d.gif'
  }
};
const mockFavorites = {
  original: [mockGif],
  filtered: [mockGif]
};
const emptyTrending = [];


describe('GifGallery container', () => {
  it('should render correctly', () => {
    const container = shallow(
      <GifGalleryContainer.WrappedComponent
        dataSource={'favorites'}
        favorites={mockFavorites}
        fetchTrendingGifs={jest.fn()}
        trending={emptyTrending}
        updateFilteredFavorites={jest.fn()}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('should be defined', () => {
    expect(GifGalleryContainer).toBeDefined();
  });
});
