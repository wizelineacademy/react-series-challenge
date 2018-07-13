import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Search from '../../../components/search';

describe('Search component', () => {
  test('should render correctly', () => {
    const component = shallow(<Search />);

    expect(shallowToJson(component)).toMatchSnapshot();
  });

  test('should be able to call searchAction when key Enter is pressed', () => {
    const searchAction = jest.fn();
    const component = mount(<Search searchAction={searchAction} />);

    component.find('input').simulate('keypress', { key: 'Enter' });

    expect(searchAction).toBeCalled();
  });

  test('should be able to define call searchAction just when key Enter is pressed', () => {
    const searchAction = jest.fn();
    const component = mount(<Search searchAction={searchAction} />);

    component.find('input').simulate('keypress', { key: 'A' });

    expect(searchAction).not.toBeCalled();
  });
});
