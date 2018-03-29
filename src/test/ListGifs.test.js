import React from 'react';
import { shallow } from 'enzyme';
import { ListGifs as PureComp } from '../components/ListGifs/ListGifs';
import ListGifs from '../components/ListGifs';
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
        id: 'KWhzYRArxnE9U0ioHW',
        images: [{
          preview_gif: { url: 'https://media2.giphy.com/media/KWhzYRArxnE9U0ioHW/giphy.gif' },
          original: { url: 'https://media2.giphy.com/media/KWhzYRArxnE9U0ioHW/giphy.gif' },
        }]
      }]
    },
    query: '',
    fetching: false,
    success: true
  },
  favorites: {
    originalList: {
      data: {
        data: [{
          title: 'luke skywalker mood GIF',
          id: 'KWhzYRArxnE9U0ioHW',
          images: [{
            preview_gif: { url: 'https://media2.giphy.com/media/KWhzYRArxnE9U0ioHW/giphy.gif' },
            original: { url: 'https://media2.giphy.com/media/KWhzYRArxnE9U0ioHW/giphy.gif' },
          }]
        }]
      }
    },
    list: {
      data: {
        data: [{
          title: 'luke skywalker mood GIF',
          id: 'KWhzYRArxnE9U0ioHW',
          images: [{
            preview_gif: { url: 'https://media2.giphy.com/media/KWhzYRArxnE9U0ioHW/giphy.gif' },
            original: { url: 'https://media2.giphy.com/media/KWhzYRArxnE9U0ioHW/giphy.gif' },
          }]
        }]
      }
    },
    query: '',
    fetching: false,
    success: true
  },
  addFavorite: () => { },
  removeFavorite: () => { }
}

describe('test ListGifs Render', () => {
  it('render structure', () => {
    const component = shallow(<ListGifs store={store} />);
    expect(component).toMatchSnapshot();
  });
});

describe('test ListGifs no data', () => {
  it('render structure', () => {
    let customBase = JSON.parse(JSON.stringify(baseProps));
    customBase.giphy = null;
    const component = shallow(<PureComp
      store={store}
      {...customBase}
    />);
    expect(component.getElement(0)).toBe(null);
  });
});

describe('test ListGifs favorites data', () => {
  it('render structure', () => {
    let customBase = JSON.parse(JSON.stringify(baseProps));
    customBase.dataSource = 'favorites';
    const component = shallow(<PureComp
      store={store}
      {...customBase}
    />);
    console.log(component)
    expect(component.find('ListGifStyled').length).toBeGreaterThanOrEqual(1);
  });
});