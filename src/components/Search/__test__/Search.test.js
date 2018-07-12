import React from 'react';
import { mount } from 'enzyme';
import PropTypes from 'prop-types';
import sinon from 'sinon';
// Component
import Search, { Pure } from "./../Search";

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
    let wrapper, instance;
    const spy = sinon.spy;
    beforeEach(function () {
        wrapper = mount(<Pure />, mountOptions);
        instance = wrapper.instance();
    });

    it('HandleSubmit test', () => {
        const spyOn = spy(instance, 'handleSubmit');
        expect(spyOn.called).toBeFalsy();
        instance.handleSubmit({ preventDefault: () => { } });
        wrapper.find('form').simulate('submit');
        expect(spyOn.called).toBeTruthy();
    });

    it('handleChange test', () => {
        const spyOn = spy(instance, 'handleChange');
        expect(spyOn.called).toBeFalsy();
        instance.handleChange({
            preventDefault: () => { },
            target: {
                value: 'hola'
            },
        }, 'searchForm.searchField');
        wrapper.find('form').simulate('submit');
        expect(spyOn.called).toBeTruthy();
    });


});