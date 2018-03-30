import React from 'react';
import { shallow, mount } from 'enzyme';
import ImagesList from '../components/imagesList';
import store from '../store'

describe('test ImagesList Render', () => {
  it('render structure', () => {
    const renderedComponent = shallow(<ImagesList store={store} />);
    expect(renderedComponent).toMatchSnapshot();
  })
  it('check length', () => {
    const rendered = shallow(<ImagesList store={store} />);
    const { currentList } = rendered.props()
    expect(currentList.length).toBe(0);
  })
})