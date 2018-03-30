import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import { mount } from 'enzyme';

describe('index', () => {
	it('should match Snapshot', () => {
		const div = document.createElement('div');
		const wrapper = mount(<div>require('./index')</div>);
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});
});
