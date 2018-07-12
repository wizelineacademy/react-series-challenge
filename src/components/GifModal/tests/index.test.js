import React from 'react';
import { shallow, mount } from 'enzyme';
import GifModal from '../index';

const gifSample = {
  id: 'id.1',
  rating: 'g',
  title: 'gif.title',
  username: 'username1',
  bitly_url: 'url',
  images: {
    preview_gif: { url: 'url' },
    original: { url: 'url' },
  },
};

describe('GifModal component', () => {
  it('should renders correctly with given props', () => {
    const props = {
      gif: gifSample,
      isFavorite: false,
      isOpen: true,
      addFavoriteId: jest.fn(),
      removeFavoriteId: jest.fn(),
      closeModal: jest.fn(),
    };
    const component = shallow(<GifModal {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should trigger closeModal when clicking close-modal-btn', () => {
    const closeModalMock = jest.fn();
    const props = {
      gif: gifSample,
      isFavorite: false,
      isOpen: true,
      addFavoriteId: jest.fn(),
      removeFavoriteId: jest.fn(),
      closeModal: closeModalMock,
    };

    const component = mount(<GifModal {...props} />);
    component.find('#close-modal-btn').simulate('click');
    expect(closeModalMock.mock.calls.length).toBe(1);
  });

  it('should trigger addFavoriteId when clicking modal-add-fav-btn', () => {
    const addFavoriteIdMock = jest.fn();
    const props = {
      gif: gifSample,
      isFavorite: false,
      isOpen: true,
      addFavoriteId: addFavoriteIdMock,
      removeFavoriteId: jest.fn(),
      closeModal: jest.fn(),
    };

    const component = mount(<GifModal {...props} />);
    component
      .find('.modal-add-fav-btn')
      .first()
      .simulate('click');
    expect(addFavoriteIdMock.mock.calls.length).toBe(1);
  });

  it('should trigger removeFavoriteId when clicking modal-add-fav-btn', () => {
    const removeFavoriteIdMock = jest.fn();
    const props = {
      gif: gifSample,
      isFavorite: true,
      isOpen: true,
      addFavoriteId: jest.fn(),
      removeFavoriteId: removeFavoriteIdMock,
      closeModal: jest.fn(),
    };

    const component = mount(<GifModal {...props} />);
    component
      .find('.modal-remove-fav-btn')
      .first()
      .simulate('click');
    expect(removeFavoriteIdMock.mock.calls.length).toBe(1);
  });
});
