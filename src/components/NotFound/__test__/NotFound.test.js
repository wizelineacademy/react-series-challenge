import React from 'react';
import { mount } from 'enzyme';
import PropTypes from 'prop-types';

// Component
import NotFound from "./../NotFound";

const mountOptions = {
    context: {
        router: {
            history: {
                createHref: () => { },
                push: () => { },
                replace: () => { },
                listen: () => { },
            },
        },
    },
    childContextTypes: {
        router: PropTypes.object,
    },
};

describe('NotFound', () => {
    let wrapper;

    beforeEach(function () {
        wrapper = mount(<NotFound />, mountOptions);
    });

    it('ui test', () => {
        expect(wrapper.find('div').length).toBe(2);
        expect(wrapper.find('h5').length).toBe(1);
        expect(wrapper.find('Link').length).toBe(1);
    });


});