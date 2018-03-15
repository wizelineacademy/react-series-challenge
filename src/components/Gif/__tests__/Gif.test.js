import React from 'react';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import Gif from '../../Gif';

describe('<Gif />', () => {
  it('Gif Item renders without crashing', () => {
    const props = {
      gif: {
        id: 'XDXDXDXD',
        images: {
          preview_gif: {
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
          preview_gif: {
            url: 'http://gif.com',
          }
        }
      },
      starred: false,
      onClickImage: () => {},
    };

    const wrapper = shallow(<Gif {...props} />);
    wrapper.find('img').simulate('click');
  });

  it('Click to set up current gif', () => {
    const props = {
      gif: {
        id: 'XDXDXDXD',
        images: {
          preview_gif: {
            url: 'http://gif.com',
          }
        }
      },
      starred: false,
      onToggleFavorite: jest.fn(),
    };

    const wrapper = mount(
      <MemoryRouter>
        <Gif {...props} />
      </MemoryRouter>
    );
    wrapper.find('Favorite').simulate('click');
    expect(props.onToggleFavorite).toHaveBeenCalledTimes(1);
  });
});
