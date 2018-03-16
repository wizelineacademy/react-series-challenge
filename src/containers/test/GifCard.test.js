import React from 'react';
import { shallow } from 'enzyme';
import GifCardContainer from '../GifCard';

const mockGif = {
  id: 'p3n7NWvfz3u0c1meay',
  images: {
    original: 'https://media3.giphy.com/media/p3n7NWvfz3u0c1meay/giphy.gif',
    small: 'https://media3.giphy.com/media/p3n7NWvfz3u0c1meay/200w_d.gif'
  }
};

describe('GifCard container', () => {
  it('should render correctly', () => {
    const container = shallow(
      <GifCardContainer.WrappedComponent
        gif={mockGif}
        isFavorite={false}
        isDetailBtnVisible
        imageSize={'small'}
        toggleFavorite={jest.fn()}
      />
    );
    expect(container).toMatchSnapshot();
  });

  it('should be defined', () => {
    expect(GifCardContainer).toBeDefined();
  });
});
