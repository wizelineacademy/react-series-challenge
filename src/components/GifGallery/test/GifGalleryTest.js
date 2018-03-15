import React from 'react';
import GifGallery from "../index";
import {shallow} from "enzyme";

const emptyDataSource = [];
const mockGif = {
  id: 'p3n7NWvfz3u0c1meay',
  images: {
    original: 'https://media3.giphy.com/media/p3n7NWvfz3u0c1meay/giphy.gif',
    small: 'https://media3.giphy.com/media/p3n7NWvfz3u0c1meay/200w_d.gif'
  }
};
const mockDataSource = [mockGif];

describe('GifCard component', () => {
  it('should render', () => {
    const component = shallow(
      <GifGallery.WrappedComponent
        dataSource={'favorites'}
        favorites={mockDataSource}
        fetchTrendingGifs={jest.fn()}
        trending={emptyDataSource}
      />
    );
    expect(component).toMatchSnapshot();
  });

  it('should render', () => {
    const component = shallow(
      <GifGallery.WrappedComponent
        dataSource={'GIPHY'}
        favorites={emptyDataSource}
        fetchTrendingGifs={jest.fn()}
        trending={mockDataSource}
      />
    );
    expect(component).toMatchSnapshot();
  });
});
