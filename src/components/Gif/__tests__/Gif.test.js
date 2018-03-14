import React from 'react';
import ReactDOM from 'react-dom';
import Gif from '../../Gif';

describe('<Gif />', () => {
  it('Gif Item renders without crashing', () => {
    const props = {
      gif: {
        id: 'XDXDXDXD',
        images: {
          original: {
            url: 'http://gif.com',
          }
        }
      },
    };

    const wrapper = shallow(<Gif {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('Click to toggle favorites', () => {
    const props = {
      gif: {
        id: 'XDXDXDXD',
        images: {
          original: {
            url: 'http://gif.com',
          }
        }
      },
      starred: false,
      onClickImage: () => {},
    };

    const wrapper = shallow(<Gif {...props} />);
    wrapper.find('img').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });

  it('Click to set up current gif', () => {
    const props = {
      gif: {
        id: 'XDXDXDXD',
        images: {
          original: {
            url: 'http://gif.com',
          }
        }
      },
      starred: false,
      onToggleFavorite: () => {},
    };

    const wrapper = shallow(<Gif {...props} />);
    wrapper.find('Favorite').simulate('click');
    expect(wrapper).toMatchSnapshot();
  });
});
