import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchBar from '../components/searchBar';
import store from '../store'

describe('test SearchBar Render', () => {
  it('render structure', () => {
    const renderedComponent = shallow(<SearchBar store={store} />);
    console.log(store.getState())
    expect(renderedComponent).toMatchSnapshot();
  })
});