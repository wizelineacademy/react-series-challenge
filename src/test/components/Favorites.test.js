import React from 'react';
import { shallow } from 'enzyme';
import { Favorites } from '../../src/components/Favorites';
import GifGallery from '../../src/components/GifGallery';

describe('<Favorites />', () => {
  const favorites = [
    {
      id: 1,
      images: {
        fixed_width_downsampled: { url: 'foo.png' },
        original: { url: 'big_foo.png' }
      }
    },
    {
      id: 2,
      images: {
        fixed_width_downsampled: { url: 'bar.png' },
        original: { url: 'bar_foo.png' }
      }
    }
  ];

  it('should return a message if anyFavorite is false', () => {
    const wrapper = shallow(<Favorites anyFavorite={false} />);
    expect(wrapper.text()).toEqual('No favorites have been selected so far 😿');
  });

  it('should return a message if anyFavorite is true but favorites length is 0', () => {
    const wrapper = shallow(<Favorites anyFavorite favorites={[]} />);
    expect(wrapper.text()).toEqual('No favorites matches the search 🔍');
  });

  it('should render a GifGallery with favorites if anyFavorite is true and favorites length is bigger than 0', () => {
    const wrapper = shallow(<Favorites anyFavorite favorites={favorites} />);
    expect(wrapper.exists()).toBeTruthy();

    const gifGalleryWrapper = wrapper.find(GifGallery).first();
    expect(gifGalleryWrapper.exists()).toBeTruthy();
    expect(gifGalleryWrapper.props().gifs).toEqual(favorites);
  });
});
