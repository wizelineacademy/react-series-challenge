import React from 'react';
import { shallow } from 'enzyme';
import { ViewFavorites as PureComp } from '../views/Favorites';
import Favorites from '../views/Favorites';
import store from '../store';

const baseProps = {
  match: {
    params: {
      gifId: 'KWhzYRArxnE9U0ioHW'
    }
  },
  favorites: {
    list: {
      data: [{
        title: 'luke skywalker mood GIF',
        id: 'KWhzYRArxnE9U0ioHW'
      }]
    },
    query: '',
    fetching: false,
    success: true
  },
  getFavoritesList: () => { },
  filterFavorite: () => { },
}

describe('test Favorites Render', () => {
  it('render structure', () => {
    const component = shallow(<Favorites  store={store} />);
    expect(component).toMatchSnapshot();
  });
});

describe('test Favorites exists', () => {
  it('render structure', () => {
    const component = shallow(<Favorites store={store} />);
    expect(component.exists()).toEqual(true);
  });
});

describe('test Favorites has SearchField', () => {
  it('render structure', () => {
    const component = shallow(<PureComp store={store} {...baseProps} />);
    expect(component.find('SearchField').length).toEqual(1);
  });
});

describe('test Favorites no data', () => {
  it('render structure', () => {
    let customBase = { ...baseProps }
    baseProps.favorites.list = null;
    const component = shallow(<PureComp
      store={store}
      {...customBase}
    />);
    expect(component.find('ListGifs').length).toEqual(0);
  });
});