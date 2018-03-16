import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Item } from '../../components';
import { Props, Context, This } from '../fakes';
import wrap from '../wrapper';

let props, context, spyAdd, spyRemove, self;

describe('Component: Item', () => {
  beforeEach(() => {
    props = { ...Props };
    context = { ...Context };
    spyAdd = jest.fn();
    spyRemove = jest.fn();
    self = This(spyAdd, spyRemove);
  });

  it('will load correctly', () => {
    const component = renderer.create(wrap(<BrowserRouter><Item  { ...props } /></BrowserRouter>)).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('will add favorite when handleClick is called', () => {
    const component = shallow(wrap(<Item  { ...props } />));
    const item = component.dive(context).dive(context).instance();
    item.handleClick.bind(self)();
    expect(spyAdd.mock.calls.length).toBe(1);
    expect(spyRemove.mock.calls.length).toBe(0);
  });

  it('will remove favorite when handleClick is called', () => {
    const component = shallow(wrap(<Item  { ...props } />));
    const item = component.dive(context).dive(context).instance();
    self.props.isFav = true;
    self.props.item = { id: 'fakeId' };
    item.handleClick.bind(self)();
    expect(spyAdd.mock.calls.length).toBe(0);
    expect(spyRemove.mock.calls.length).toBe(1);
  });
});
