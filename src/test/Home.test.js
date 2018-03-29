import React from 'react';
import { shallow } from 'enzyme';
import { ViewHome as PureComp } from '../views/Home';
import ViewHome from '../views/Home';
import store from '../store';

const baseProps = {
  match: {
    params: {
      gifId: 'KWhzYRArxnE9U0ioHW'
    }
  },
  giphy: {
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
  getTrendingList: () => { },
  getSearchList: () => { },
  getFavoritesList: () => { },
}

describe('test Home Render', () => {
  it('render structure', () => {
    const component = shallow(<ViewHome  store={store} />);
    expect(component).toMatchSnapshot();
  });
});

describe('test Home exists', () => {
  it('render structure', () => {
    const component = shallow(<ViewHome store={store} />);
    expect(component.exists()).toEqual(true);
  });
});

describe('test Home has SearchField', () => {
  it('render structure', () => {
    const component = shallow(<PureComp store={store} {...baseProps} />);
    expect(component.find('SearchField').length).toEqual(1);
  });
});

describe('test Home no data', () => {
  it('render structure', () => {
    let customBase = { ...baseProps }
    customBase.giphy.list = null;
    const component = shallow(<PureComp
      store={store}
      {...customBase}
    />);
    expect(component.find('ListGifs').length).toEqual(0);
  });
});

describe('test Home error data', () => {
  it('render structure', () => {
    let customBase = { ...baseProps }
    customBase.giphy.fetching = false;
    customBase.giphy.success = false;
    customBase.giphy.list = { data: null };
    const component = shallow(<PureComp
      store={store}
      {...customBase}
    />);
    expect(component.contains(<div>Algo salió mal...</div>)).toEqual(true);
  });
});

describe('test Home loading data', () => {
  it('render structure', () => {
    let customBase = { ...baseProps }
    customBase.giphy.fetching = true;
    customBase.giphy.success = true;
    customBase.giphy.list = null;
    const component = shallow(<PureComp
      store={store}
      {...customBase}
    />);
    expect(component.contains(<div>Cargando...</div>)).toEqual(true);
  });
});

describe('test Home loading data from api', () => {
  it('render structure', () => {
    let customBase = { ...baseProps }
    customBase.giphy.query = 'red';
    const component = shallow(<PureComp
      store={store}
      {...customBase}
    />);
    expect(component.contains(<div>Cargando...</div>)).toEqual(true);
  });
});