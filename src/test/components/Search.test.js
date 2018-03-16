import React from 'react';
import { mount, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Search } from '../../components';
import { Context, This } from '../fakes';
import wrap from '../wrapper';

let context, spyHome, spyFavorites, self;

describe('Search', () => {
  beforeEach(() => {
    context = { ...Context };
    spyHome = jest.fn();
    spyFavorites = jest.fn();
    self = This(spyHome, spyFavorites);
  });

  it('will load correctly', () => {
    const component = renderer.create(wrap(<Search />)).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('will handle search input', () => {
    const component = mount(wrap(<Search />));
    component.find('input').first().simulate('change', { target: { value: 'value' } });
  });

  it('with not search without query', () => {
    const component = shallow(wrap(<Search />));
    const search = component.dive(context).dive(context).instance();
    search.handleSearchClick.bind(self)();
    expect(spyHome.mock.calls.length).toBe(0);
    expect(spyFavorites.mock.calls.length).toBe(0);
  });

  it('with search in home', () => {
    const component = shallow(wrap(<Search />));
    const search = component.dive(context).dive(context).instance();
    self.props.query = 'someQuery';
    search.handleSearchClick.bind(self)();
    expect(spyHome.mock.calls.length).toBe(1);
    expect(spyFavorites.mock.calls.length).toBe(0);
  });

  it('with search in favorites', () => {
    const component = shallow(wrap(<Search />));
    const search = component.dive(context).dive(context).instance();
    self.props.query = 'someQuery';
    self.props.isFavorites = true;
    search.handleSearchClick.bind(self)();
    expect(spyHome.mock.calls.length).toBe(0);
    expect(spyFavorites.mock.calls.length).toBe(1);
  });
});
