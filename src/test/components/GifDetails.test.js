import React from 'react';
import { shallow } from 'enzyme';
import { GifDetails, StyledTextInfo } from '../../components/GifDetails';

describe('<GifDetails />', () => {
  const gif = {
    id: 1,
    images: {
      fixed_width_downsampled: { url: 'foo.png' },
      original: { url: 'big_foo.png' }
    },
    title: 'some title'
  };

  const gifWithUser = {
    ...gif,
    user: {
      username: 'someFoo',
      twitter: '@someFoo'
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

  it('should render if gif is loading', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<GifDetails location={validLocation} selectedGifRequestInfo={mockFn} gif={{ loading: true }} />);

    expect(wrapper.exists()).toBeTruthy();;
  });

  it('should render gif title', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<GifDetails location={location} selectedGifRequestInfo={mockFn} gif={gif} />);

    const textContent = wrapper.find(StyledTextInfo).children();
    expect(textContent.exists()).toBeTruthy();
    expect(textContent.text()).toEqual(gif.title);
  });

  it('should render user twitter if it has one', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<GifDetails location={location} selectedGifRequestInfo={mockFn} gif={gifWithUser} />);

    const textContent = wrapper.find(StyledTextInfo).last().children();
    expect(textContent.first().text()).toEqual('Twitter: ');
    expect(textContent.last().text()).toEqual(gifWithUser.user.username);
  });
});
