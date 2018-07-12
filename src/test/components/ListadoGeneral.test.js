import ListadoGeneral from '../../components/ListadoGeneral';
import React from 'react';
import {shallow} from 'enzyme';

describe('ListadoGeneral', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(
            <ListadoGeneral/>
        );
    });

    test('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot()
    })

});