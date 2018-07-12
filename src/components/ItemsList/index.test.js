import React from 'react';
import { shallow } from 'enzyme';
import ItemsList, { ItemsList as ItemsListComponent } from './index';
import store from '../../store';

const onClickMock = jest.fn();

const testCurrentItemsList = [
  {
    title: 'happy emma watson GIF',
    id: 'WsKVAem02Efuw',
    images: {
      original: {
        url: 'https://media1.giphy.com/media/WsKVAem02Efuw/giphy.gif',
      },
    },
    favorite: false,
  },
  {
    title: 'emma watson GIF',
    id: 'rSsoG2WPmzOIE',
    images: {
      original: {
        url: 'https://media3.giphy.com/media/rSsoG2WPmzOIE/giphy.gif',
      },
    },
    favorite: false,
  },
];

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
  it('should render ItemsList Component', () => {
    const renderedComponent = shallow(
      <ItemsListComponent
        currentItemsList={testCurrentItemsList}
        favoritesButton={onClickMock}
      />
    );
    expect(renderedComponent).toMatchSnapshot();
  });
});
