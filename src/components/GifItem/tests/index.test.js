import React from 'react';
import { shallow, mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import GifItem, { ActionButton } from '../index';
import { theme } from '../../../App';

describe('GifItem component', () => {
  const gifSample = {
    id: 'id.1',
    rating: 'g',
    title: 'gif.title',
    username: 'username1',
    bitly_url: 'url',
    images: {
      preview_gif: { url: 'url' },
    },
  };
  it('should render correctly', () => {
    const props = {
      id: 'id.1',
      isFavorite: false,
      addFavoriteId: jest.fn(),
      removeFavoriteId: jest.fn(),
      openModal: jest.fn(),
      gif: gifSample,
    };
    const component = shallow(<GifItem {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should throw an error if gif rating is r', () => {
    const props = {
      id: 'id.1',
      isFavorite: false,
      addFavoriteId: jest.fn(),
      removeFavoriteId: jest.fn(),
      openModal: jest.fn(),
      gif: {
        ...gifSample,
        rating: 'r',
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

  describe('Render fav or remove from fav button depending on isFavorite Prop', () => {
    it('should render add to favs btn when isFavorite is false', () => {
      const addFavoriteIdMock = jest.fn();
      const props = {
        id: 'id.1',
        isFavorite: false,
        addFavoriteId: addFavoriteIdMock,
        removeFavoriteId: jest.fn(),
        openModal: jest.fn(),
        gif: {
          ...gifSample,
        },
      };
      const component = mount(
        <ThemeProvider theme={theme}>
          <GifItem {...props} />
        </ThemeProvider>
      );

      expect(component.find('.add-favorites-button').first()).toHaveLength(1);
    });

    it('should render remove from favs btn when isFavorite is true', () => {
      const addFavoriteIdMock = jest.fn();
      const props = {
        id: 'id.1',
        isFavorite: true,
        addFavoriteId: addFavoriteIdMock,
        removeFavoriteId: jest.fn(),
        openModal: jest.fn(),
        gif: {
          ...gifSample,
        },
      };
      const component = mount(
        <ThemeProvider theme={theme}>
          <GifItem {...props} />
        </ThemeProvider>
      );

      expect(component.find('.remove-favorites-button').first()).toHaveLength(
        1
      );
    });
  });

  describe('addFavoriteId trigger, when isFavorite is set to false', () => {
    it('should correctly call addFavoriteId', () => {
      const addFavoriteIdMock = jest.fn();
      const props = {
        id: 'id.1',
        isFavorite: false,
        addFavoriteId: addFavoriteIdMock,
        removeFavoriteId: jest.fn(),
        openModal: jest.fn(),
        gif: {
          ...gifSample,
        },
      };
      const component = mount(
        <ThemeProvider theme={theme}>
          <GifItem {...props} />
        </ThemeProvider>
      );

      //expect(component.find('.add-favorites-btn')).toHaveLength(1);
      component
        .find('.add-favorites-button')
        .first()
        .simulate('click');
      expect(addFavoriteIdMock.mock.calls.length).toBe(1);
    });
  });

  describe('removeFavoriteID triggers, when isFavorite is set to true and clicks on button', () => {
    it('should correctly call removeFavoriteId', () => {
      const removeFavoriteIdMock = jest.fn();
      const props = {
        id: 'id.1',
        isFavorite: true,
        addFavoriteId: jest.fn(),
        removeFavoriteId: removeFavoriteIdMock,
        openModal: jest.fn(),
        gif: {
          ...gifSample,
        },
      };
      const component = mount(
        <ThemeProvider theme={theme}>
          <GifItem {...props} />
        </ThemeProvider>
      );

      //expect(component.find('.remove-favorites-btn')).toHaveLength(1);
      component
        .find('.remove-favorites-button')
        .first()
        .simulate('click');
      expect(removeFavoriteIdMock.mock.calls.length).toBe(1);
    });
  });
});
