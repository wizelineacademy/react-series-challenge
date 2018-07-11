import React from 'react';
import { shallow } from 'enzyme';
import ItemsList from './index';
import store from '../../store';

describe('test ItemsList Render', () => {
  it('should render component structure', () => {
    const renderedComponent = shallow(<ItemsList store={store} />);
    expect(renderedComponent).toMatchSnapshot();
  });
  it('should check length', () => {
    const rendered = shallow(<ItemsList store={store} />);
    const { currentItemsList } = rendered.props();
    expect(currentItemsList.length).toBe(0);
  });
});
