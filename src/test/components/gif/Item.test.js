import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Item } from '../../../components/gif';
import { FavoriteButton } from '../../../components/gif/Item.style';
import 'jest-styled-components';

describe('Item component', () => {
  test('should render correctly', () => {
    const fakeData = {
      images: {
        original: { webp: '' }
      }
    };
    const component = shallow(<Item data={fakeData} />);

    expect(shallowToJson(component)).toMatchSnapshot();
  });

  test('should be able to toggle favorite gif when favorite button is clicked', () => {
    const toggleFavorite = jest.fn();
    const fakeData = {
      images: {
        original: { webp: '' }
      }
    };
    const component = mount(
      <Item toggleFavorite={toggleFavorite} data={fakeData} />
    );

    component.find('button').simulate('click');
    expect(toggleFavorite).toBeCalled();
  });
});

describe('Item styled component', () => {
  test('should be render favorite icon if received favorite=true', () => {
    const fakeData = {
      images: {
        original: { webp: '' }
      }
    };
    const component = shallow(<Item favorite={true} data={fakeData} />);

    const favoriteButton = shallowToJson(component.find(FavoriteButton));
    expect(favoriteButton).toMatchSnapshot();
  });
});
