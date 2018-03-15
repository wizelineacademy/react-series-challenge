import React from 'react';
import { shallow } from 'enzyme';
import { Search } from '../../components/Search';
import GifGallery from '../../components/GifGallery';

describe('<Search />', () => {
  const gifs = [
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

  it('should return a loading message if loading is true', () => {
    const wrapper = shallow(<Search loading />);
    expect(wrapper.text()).toEqual('Loading...');
  });

  it('should render a GifGallery with gifs if not loading', () => {
    const wrapper = shallow(<Search gifs={gifs} />);
    expect(wrapper.find(GifGallery).first().props().gifs).toEqual(gifs);
  });
});
