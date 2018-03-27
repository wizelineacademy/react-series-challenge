import React from 'react';
import { shallow } from 'enzyme';
import GifDetailView from '../components/GifDetailView';
import store from '../store';

describe('test GifDetailView Render', () => {
  it('render structure', () => {
    const component = shallow(<GifDetailView  store={store} />);
    expect(component).toMatchSnapshot();
  });
});