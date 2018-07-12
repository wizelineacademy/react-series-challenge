import ListadoFavoritos from '../../components/ListadoFavoritos';
import React from 'react';
import {shallow} from 'enzyme';

describe('ListadoFavoritos', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <ListadoFavoritos/>
        );
    });

    test('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

});