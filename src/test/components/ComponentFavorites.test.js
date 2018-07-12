import React from 'react';
import ComponentFavorites from '../../components/ComponentFavorites';
import configureStore from 'redux-mock-store';
import { ContainerInputText, InputText, } from '../../styles/App.style';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

const initialState = {
    gifsFavorites: {
        favorites: [],
        textFilter: '',
    },
};
const mockStore = configureStore();
const store = mockStore(initialState);
describe('ComponentFavorites test', () => {

    test('Should match snapshot', () => {
        const favComponent = renderer.create(<ComponentFavorites store={store} />).toJSON();
        expect(favComponent).toMatchSnapshot();
    });

    test('Should render ContainerInputText', () => {
        const favComponent = mount(<ComponentFavorites store={store} />);
        expect(favComponent.find(ContainerInputText).length).toEqual(1);
    });

    test('Should render InputText', () => {
        const favComponent = mount(<ComponentFavorites store={store} />);
        expect(favComponent.find(InputText).length).toEqual(1);
    });
}); 