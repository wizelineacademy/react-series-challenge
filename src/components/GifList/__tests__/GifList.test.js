import React from 'react';
import ReactDOM from 'react-dom';
import GifList from '../../GifList';

describe('<GifList />', () => {
  it('GifList renders without crashing with no elements', () => {
    const props = {
      elements: [],
      starred: {},
      handleSetGif: () => {},
      handleToggleFav: () => {},
    };

    const wrapper = shallow(<GifList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('GifList renders without crashing with elements', () => {
    const props = {
      elements: [
        { id: 'XDXDXD1' },
        { id: 'XDXDXD2' },
        { id: 'XDXDXD3' },
      ],
      starred: {},
      handleSetGif: () => {},
      handleToggleFav: () => {},
    };

    const wrapper = shallow(<GifList {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
