import React from 'react';
import GifGallery from "../index";
import {shallow} from "enzyme";

// const emptyDataSource = [];
// const mockGif = {
//   id: 'p3n7NWvfz3u0c1meay',
//   images: {
//     original: 'https://media3.giphy.com/media/p3n7NWvfz3u0c1meay/giphy.gif',
//     small: 'https://media3.giphy.com/media/p3n7NWvfz3u0c1meay/200w_d.gif'
//   }
// };
// const mockDataSource = [mockGif];

const emptyFavorites = {
  original: [],
  filtered: []
};
const emptyTrending = [];
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
const mockTrending = [mockGif];

describe('GifCard component', () => {
  it('should render', () => {
    const component = shallow(
      <GifGallery.WrappedComponent
        dataSource={'favorites'}
        favorites={mockFavorites}
        fetchTrendingGifs={jest.fn()}
        trending={emptyTrending}
        updateFilteredFavorites={jest.fn()}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render', () => {
    const component = shallow(
      <GifGallery.WrappedComponent
        dataSource={'GIPHY'}
        favorites={emptyFavorites}
        fetchTrendingGifs={jest.fn()}
        trending={mockTrending}
        updateFilteredFavorites={jest.fn()}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
