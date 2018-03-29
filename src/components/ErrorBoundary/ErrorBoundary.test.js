import React from 'react';
import renderer from 'react-test-renderer';
import { ErrorBoundary } from './ErrorBoundary';

describe('ErrorBoundary', () => {
	it('should be match Snapshot', () => {
		const renderedValue = renderer
			.create(
				<ErrorBoundary>
					<div />
				</ErrorBoundary>
			)
			.toJSON();
		expect(renderedValue).toMatchSnapshot();
	});
});
