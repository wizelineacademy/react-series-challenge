import React from 'react';
import { shallow } from 'enzyme';
import { GifModal } from '../index';

describe('GifModal Container', () => {
  const closeModalMock = jest.fn();
  const addFavoriteIdMock = jest.fn();
  const removeFavoriteIdMock = jest.fn();
  let props = {};

  beforeEach(() => {
    props = {
      isOpen: true,
      gif: {
        id: 'id.1',
        rating: 'r',
        title: 'gif nsfw title',
        username: 'username1',
        bitly_url: 'url',
        images: {
          preview_gif: { url: 'url' },
          original: { url: 'original.url' },
        },
      },
      isFavorite: false,
      closeModal: closeModalMock,
      addFavoriteId: addFavoriteIdMock,
      removeFavoriteId: removeFavoriteIdMock,
    };
  });

  it('should render correctly', () => {
    const component = shallow(<GifModal {...props} />);
    expect(component).toMatchSnapshot();
  });
});
