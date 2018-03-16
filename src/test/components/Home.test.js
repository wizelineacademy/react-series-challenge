import React from 'react';
import { shallow } from 'enzyme';
import { Home } from '../../components/Home';
import GifGallery from '../../components/GifGallery';

describe('<Home />', () => {
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
    const mockFn = jest.fn();
    const wrapper = shallow(<Home loading loadTrendingRequest={mockFn} />);
    expect(wrapper.text()).toEqual('Loading...');
  });

  it('should render a GifGallery with gifs if not loading', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Home gifs={gifs} loadTrendingRequest={mockFn} />);

    expect(wrapper.find(GifGallery).first().props().gifs).toEqual(gifs);
  });

  it('should call loadTrendingRequest when component mounts', () => {
    const mockFn = jest.fn();
    shallow(<Home loadTrendingRequest={mockFn} />);
    expect(mockFn).toHaveBeenCalled();
  });
});
