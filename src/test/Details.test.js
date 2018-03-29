import React from 'react';
import { shallow } from 'enzyme';
import { Details as PureComp } from '../views/Details';
import Details from '../views/Details';
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
    fetching: false,
    success: true
  },
  getById: () => { },
  getFavoritesList: () => { }
}

describe('test Details Render', () => {
  it('render structure', () => {
    const component = shallow(<Details store={store} />);
    expect(component).toMatchSnapshot();
  });
});

describe('test Details exists', () => {
  it('render structure', () => {
    const component = shallow(<Details store={store} />);
    expect(component.exists()).toEqual(true);
  });
});

describe('test Details has h2', () => {
  it('render structure', () => {
    const component = shallow(<PureComp
      store={store}
      {...baseProps}
    />);
    expect(component.find('h2').length).toEqual(1);
  });
});

describe('test Details no data', () => {
  it('render structure', () => {
    let customBase = { ...baseProps }
    baseProps.giphy.list = null;
    const component = shallow(<PureComp
      store={store}
      {...customBase}
    />);
    expect(component.getElement(0)).toBe(null);
  });
});

describe('test Details error data', () => {
  it('render structure', () => {
    let customBase = { ...baseProps }
    customBase.giphy.fetching = false;
    customBase.giphy.success = false;
    customBase.giphy.list = { data: [] };
    const component = shallow(<PureComp
      store={store}
      {...customBase}
    />);
    expect(component.contains(<div>Algo salió mal...</div>)).toEqual(true);
  });
});