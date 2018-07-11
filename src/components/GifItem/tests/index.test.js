import React from 'react';
import { shallow } from 'enzyme';
import GifItem from '../index';

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
        rating: 'r',
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
});
