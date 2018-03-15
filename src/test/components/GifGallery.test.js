import React from 'react';
import { shallow } from 'enzyme';
import GifGallery from '../../src/components/GifGallery';
import Gif from '../../src/components/Gif';

describe('<GifGallery />', () => {
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

  it('should not render correctly if no gifs are passed to it', () => {
    const execute = () => {
      shallow(<GifGallery />);
    };
    expect(execute).toThrow();
  });

  it('should render correctly when passed in an array of gifs', () => {
    const execute = () => {
      shallow(<GifGallery gifs={gifs} />);
    };
    expect(execute).not.toThrow();
  });

  it('should render 2 Gif component when passed 2 gifs', () => {
    const wrapper = shallow(<GifGallery gifs={gifs} />);
    expect(wrapper.find(Gif)).toHaveLength(2);
  });
});
