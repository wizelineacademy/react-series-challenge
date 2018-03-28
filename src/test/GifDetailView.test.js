import React from 'react';
import { shallow } from 'enzyme';
import { GifDetailView as PureComp } from '../components/GifDetailView/GifDetailView';
import GifDetailView from '../components/GifDetailView';
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
          preview_gif: {url:'https://media2.giphy.com/media/KWhzYRArxnE9U0ioHW/giphy.gif'},
          original: {url: 'https://media2.giphy.com/media/KWhzYRArxnE9U0ioHW/giphy.gif'},
        }]
      }]
    },
    query: '',
    fetching: false,
    success: true
  },
  favorites: {
    originalList:{
      data: [{
        title: 'luke skywalker mood GIF',
        id: 'KWhzYRArxnE9U0ioHW',
        images: [{
          preview_gif: {url:'https://media2.giphy.com/media/KWhzYRArxnE9U0ioHW/giphy.gif'},
          original: {url: 'https://media2.giphy.com/media/KWhzYRArxnE9U0ioHW/giphy.gif'},
        }]
      }]
    },
    list: {
      data: [{
        title: 'luke skywalker mood GIF',
        id: 'KWhzYRArxnE9U0ioHW',
        images: [{
          preview_gif: {url:'https://media2.giphy.com/media/KWhzYRArxnE9U0ioHW/giphy.gif'},
          original: {url: 'https://media2.giphy.com/media/KWhzYRArxnE9U0ioHW/giphy.gif'},
        }]
      }]
    },
    query: '',
    fetching: false,
    success: true
  },
  addFavorite: () => { },
  removeFavorite: () => { }
}

describe('test GifDetailView Render', () => {
  it('render structure', () => {
    const component = shallow(<GifDetailView store={store} />);
    expect(component).toMatchSnapshot();
  });
});

describe('test GifDetailView no data', () => {
  it('render structure', () => {
    let customBase = JSON.parse(JSON.stringify(baseProps));
    customBase.giphy.list = null;
    customBase.favorites.originalList.data = null;
    const component = shallow(<PureComp
      store={store}
      {...customBase}
    />);
    expect(component.getElement(0)).toBe(null);
  });
});

describe('test GifDetailView is Fav', () => {
  it('render structure', () => {
    let customBase = JSON.parse(JSON.stringify(baseProps));
    console.log(customBase.giphy.list.data[0])
    const component = shallow(<PureComp
      store={store}
      {...customBase}
    />);
    expect(component.getElement(0)).toBe(null);
  });
});

