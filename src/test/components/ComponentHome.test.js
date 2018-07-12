import React from 'react';
import ComponentHome from '../../components/ComponentHome';
import configureStore from 'redux-mock-store';
import { ContainerInputText, InputText, H4 } from '../../styles/App.style';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import ComponentGif from '../../components/ComponentGif';

const initialState = {
  gifsTrending: {
    gifs: [],
    loading: true,
  },
  gifsFavorites: {
    favorites: [],
    textFilter: '',
  },
};
const mockStore = configureStore();
const store = mockStore(initialState);
describe('ComponentHome test', () => {

  test('Should match snapshot', () => {
    const favComponent = renderer.create(<ComponentHome store={store} />).toJSON();
    expect(favComponent).toMatchSnapshot();
  });

  test('Should render ContainerInputText', () => {
    const favComponent = mount(<ComponentHome store={store} />);
    expect(favComponent.find(ContainerInputText).length).toEqual(1);
  });

  test('Should render InputText', () => {
    const favComponent = mount(<ComponentHome store={store} />);
    expect(favComponent.find(InputText).length).toEqual(1);
  });

  test('Should render LOADING', () => {
    const favComponent = mount(<ComponentHome store={store} />);
    expect(favComponent.find(H4).length).toEqual(1);
  });

  test('Should favorite', () => {
    const gif = { id: '01010101', title: 'my gif', gif: { url: 'http://www.zyzyzy', width: '100px', height: '100' } };
    initialState.gifsTrending.gifs = [gif];
    initialState.gifsFavorites.favorites = [gif];
    const __store = mockStore(initialState);
    const favComponent = mount(<ComponentHome store={__store} />);
    expect(favComponent.find(ComponentGif).length).toEqual(0);
  });
});
