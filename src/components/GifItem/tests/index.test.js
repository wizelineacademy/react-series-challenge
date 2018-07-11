import React from 'react';
import { shallow } from 'enzyme';
import GifItem, { ActionButton } from '../index';
import { theme } from '../../../App';

describe('GifItem component', () => {
  it('should render correctly', () => {
    const props = {
      id: 'id.1',
      isFavorite: false,
      addFavoriteId: jest.fn,
      removeFavoriteId: jest.fn,
      openModal: jest.fn,
      gif: {
        id: 'id.1',
        rating: 'g',
        title: 'gif.title',
        username: 'username1',
        bitly_url: 'url',
        images: {
          preview_gif: { url: 'url' },
        },
      },
    };
    const component = shallow(<GifItem {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should throw an error if gif rating is r', () => {
    const props = {
      id: 'id.1',
      isFavorite: false,
      addFavoriteId: jest.fn,
      removeFavoriteId: jest.fn,
      openModal: jest.fn,
      gif: {
        id: 'id.1',
        rating: 'r',
        title: 'gif nsfw title',
        username: 'username1',
        bitly_url: 'url',
        images: {
          preview_gif: { url: 'url' },
        },
      },
    };
    expect(() => shallow(<GifItem {...props} />)).toThrow();
  });

  describe('ActionButton styled component', () => {
    it('should render correctly', () => {
      const component = shallow(
        <ActionButton theme={theme}>Agregar a favoritos</ActionButton>
      );
      expect(component).toMatchSnapshot();
    });
  });
});
