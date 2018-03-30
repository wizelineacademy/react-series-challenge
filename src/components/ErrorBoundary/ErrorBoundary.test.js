import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import { mount } from 'enzyme';
import { ErrorBoundary } from './ErrorBoundary';

describe('ErrorBoundary', () => {
	it('should be match Snapshot', () => {
		const wrapper = mount(
			<ErrorBoundary>
				<div />
			</ErrorBoundary>
		);
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});
});
