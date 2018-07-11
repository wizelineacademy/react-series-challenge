import React from 'react';
import { shallow, mount } from 'enzyme';
import Favorites from './index';
import store from '../../store';
import { Provider } from 'react-redux';

describe('test Favorites Render', () => {
  it('render structure', () => {
    const renderedComponent = shallow(<Favorites store={store} />);
    expect(renderedComponent).toMatchSnapshot();
  });
  it('check lifecycle', () => {
    const mounted = mount(
      <Provider store={store}>
        <Favorites />
      </Provider>
    );
    mounted.unmount();
    const state = store.getState();
    const { inputString } = state.search;
    expect(inputString).toBe('');
  });
});
