import React from 'react';
import { shallow } from 'enzyme';
import { Gif, StyledGif, StyledFavoritedIcon } from '../../components/Gif';

describe('<Gif />', () => {
  const gif = {
    id: 1,
    images: {
      fixed_width_downsampled: { url: 'foo.png' },
      original: { url: 'big_foo.png' }
    }
  };

  it('should not render correctly if no gif is passed', () => {
    const execute = () => {
      shallow(<Gif />);
    };
    expect(execute).toThrow();
  });

  it('should render correctly if a gif is passed in', () => {
    const execute = () => {
      shallow(<Gif gif={gif} />);
    };
    expect(execute).not.toThrow();

    const wrapper = shallow(<Gif gif={gif} />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render correctly if a gif is passed in', () => {
    const execute = () => {
      shallow(<Gif gif={gif} />);
    };
    expect(execute).not.toThrow();

    const wrapper = shallow(<Gif gif={gif} />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should use downsampled image if big prop is not passed in', () => {
    const wrapper = shallow(<Gif gif={gif} />);
    expect(wrapper.exists()).toBeTruthy();

    const styledGifWrapper = wrapper.find(StyledGif).first();
    expect(styledGifWrapper.exists()).toBeTruthy();
    expect(styledGifWrapper.props().src).toEqual(gif.images.fixed_width_downsampled.url);
  });

  it('should use original image if big prop is passed in', () => {
    const wrapper = shallow(<Gif gif={gif} big />);
    expect(wrapper.exists()).toBeTruthy();

    const styledGifWrapper = wrapper.find(StyledGif).first();
    expect(styledGifWrapper.exists()).toBeTruthy();
    expect(styledGifWrapper.props().src).toEqual(gif.images.original.url);
  });

  it('should call selectedGifChange when StyledGif is clicked', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Gif gif={gif} selectedGifChange={mockFn} />);
    const styledGifWrapper = wrapper.find(StyledGif).first();

    expect(styledGifWrapper.exists()).toBeTruthy();
    styledGifWrapper.simulate('click');

    expect(mockFn).toHaveBeenCalledWith(gif);
  });

  it('should call toggleFavorite when StyledFavoritedIcon is clicked', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Gif gif={gif} toggleFavorite={mockFn} />);
    const styledFavoritedIconWrapper = wrapper.find(StyledFavoritedIcon).first();

    expect(styledFavoritedIconWrapper.exists()).toBeTruthy();
    styledFavoritedIconWrapper.simulate('click');

    expect(mockFn).toHaveBeenCalledWith(gif);
  });

  it('should pass favorited to StyledFavoritedIcon as active prop', () => {
    let wrapper = shallow(<Gif gif={gif} favorited />);
    expect(wrapper.find(StyledFavoritedIcon).first().props().active).toBeTruthy();

    wrapper = shallow(<Gif gif={gif} favorited={false} />);
    expect(wrapper.find(StyledFavoritedIcon).first().props().active).toBeFalsy();
  });
});
