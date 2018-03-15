import React from 'react';
import { shallow } from 'enzyme';
import { GifDetails } from '../../src/components/GifDetails';

describe('<GifDetails />', () => {
  const gif = {
    id: 1,
    images: {
      fixed_width_downsampled: { url: 'foo.png' },
      original: { url: 'big_foo.png' }
    }
  };

  const location = {
    search: ''
  };

  const validLocation = {
    search: '?gifId=foo'
  };

  it('should return null if gif is not passed in', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<GifDetails location={location} selectedGifRequestInfo={mockFn} />);
    expect(wrapper.get(0)).toBeNull();
  });

  it('should call selectedGifRequestInfo if location.search is valid', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<GifDetails location={validLocation} selectedGifRequestInfo={mockFn} gif={gif} />);

    expect(mockFn).toHaveBeenCalledWith('foo');
  });
});
