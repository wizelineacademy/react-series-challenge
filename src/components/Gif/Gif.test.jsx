import React from 'react';
import { shallow } from 'enzyme';
import Gif from './Gif';

describe('Gif component', () => {
  it('renders the liked image', () => {
    const obj = {
      title: 'hello',
      embed_url: 'url',
      id: 'XX',
      isFavorite: true,
    };
    const mockAdd = jest.fn();
    const mockRemove = jest.fn();
    const wrapper = shallow(<Gif object={obj} addFavorite={mockAdd} removeFavorite={mockRemove} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });

  it('renders the liked image', () => {
    const obj = {
      title: 'hello',
      embed_url: 'url',
      id: 'XX',
      isFavorite: false,
    };
    const mockAdd = jest.fn();
    const mockRemove = jest.fn();
    const wrapper = shallow(<Gif object={obj} addFavorite={mockAdd} removeFavorite={mockRemove} />);
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
