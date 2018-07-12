import React from 'react';
import { Provider } from 'react-redux';
import MainGifsView from '../../../components/MainGifsView/MainGifsView';
// import { shallow } from 'enzyme';
import store from "../../../store";
import renderer from 'react-test-renderer';

describe('MainGifsView', () => {

    it('should render without problems', () => {
        const wrapper = renderer.create(
            <Provider store={store}>
                <MainGifsView />
            </Provider>
        ).toJSON();
        expect(wrapper).toMatchSnapshot();
    });

});
