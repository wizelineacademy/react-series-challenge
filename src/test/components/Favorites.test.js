import React from 'react';
import configureStore from 'redux-mock-store';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import Favorites from '../../components/Favorites';
import rootSaga from '../../sagas';

describe('Favorites test', () => {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware];
    const mockStore = configureStore(middleware);
    const initialState= {
        favorites: {},
        searchBar: {value:''}
    };
    let wrapper;

    beforeEach(() => {
        const store = mockStore(initialState);
        sagaMiddleware.run(rootSaga);
        wrapper = shallow(<Provider store={store}><Favorites /></Provider>);
    });

    test('Favorites shallow test', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
