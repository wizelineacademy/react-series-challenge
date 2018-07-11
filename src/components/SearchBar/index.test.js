import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from './index';
import store from '../../store';

describe('test SearchBar Render', () => {
  it('should render structure', () => {
    const renderedComponent = shallow(<SearchBar store={store} />);
    expect(renderedComponent).toMatchSnapshot();
  });
});
