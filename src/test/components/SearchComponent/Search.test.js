import React from 'react';
import { shallow } from 'enzyme';
import SearchComponent from '../../../components/SearchComponent';

describe('Search Component', () => {
	test('Shallow', () => {
		const search = shallow(<SearchComponent />);
		expect(search).toMatchSnapshot();
	});
});