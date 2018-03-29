import React from 'react';
import { shallow, mount } from 'enzyme';
import Home from '../components/home';
import store from '../store';
import { Provider } from 'react-redux';

describe('test Home Render', () => {
  it('render structure', () => {
    const renderedComponent = shallow(<Home store={store} />);
    expect(renderedComponent).toMatchSnapshot();
  })
  it( 'check lifecycle', () => {
    const mounted = mount(<Provider store={store}><Home /></Provider>)
    mounted.unmount()
    const state = store.getState();
    const { inputString } = state.search;
    expect(inputString).toBe('');
  })
})
