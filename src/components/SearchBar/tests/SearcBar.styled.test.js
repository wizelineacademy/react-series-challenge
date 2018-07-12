import React from 'react';
import { shallow } from 'enzyme';
import { SearchBarForm } from '../SearchBar.styled';

describe('SearchBar styled components', () => {
  it('should render correctly', () => {
    const component = shallow(<SearchBarForm />);
    expect(component).toMatchSnapshot();
  });
});
