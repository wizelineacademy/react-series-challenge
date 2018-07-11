import React from 'react';
import { shallow } from 'enzyme';
import ComponentHome from '../../components/ComponentHome';
import { ContainerInputText, InputText, } from '../../styles/App.style';
import store from '../../store';

const initialState = {
  gifsTrending: {
    gifs: [],
    loading: false,
  },
  gifsFavorites: {
    favoritos: [],
    textFilter: '',
  }
}
const _store = store();
describe('Component Home', () => {
  let home;

  beforeEach(() => {
    home = shallow(<ComponentHome store={_store} />);
  });

  test('Should match snapshot', () => {
    expect(home).toMatchSnapshot();
  });

  test('Should exists component', () => {
    expect(home.exists()).toEqual(true);
  });

  test('Should find ContainerInputText', () => {
    expect(home.find(ContainerInputText).length).toEqual(0);
  });

  test('Should find InputText', () => {
    expect(home.contains(<InputText />)).toEqual(false);
  });
});