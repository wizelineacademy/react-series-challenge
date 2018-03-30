import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import { shallow } from 'enzyme';
import Index from './IndexClass';

describe('Index', () => {
	it('should match Snapshot', () => {
		const div = document.createElement('div');
		const wrapper = shallow(
			<div>
				<Index />
			</div>
		);
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});
});
