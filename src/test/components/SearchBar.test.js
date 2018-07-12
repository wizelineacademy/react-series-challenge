import React from 'react';

import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';

import ConnectedSearchBar, { SearchBar } from '../../components/SearchBar';

describe('Header component', () => {
  test('should shallow correctly', () => {
    const header = shallow(<SearchBar />);

    expect(header).toMatchSnapshot();
  });

  test('should shallow connected component correctly', () => {
    const store = configureStore()({ });
    const wrapper = shallow(<ConnectedSearchBar store={store} />);

    expect(wrapper).toMatchSnapshot();
  });
});
