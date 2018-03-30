import React from 'react';
import { shallowToJson } from 'enzyme-to-json';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Body } from './Body';

const initialState = {
	gifsFetch: {
		gifsList: [],
		search: '',
		fetching: false,
		trending: true,
		searching: false,
		error: false,
		errorInfo: ''
	},
	user: { favorites: {} }
};
describe('Body', () => {
	let store;
	const mockStore = configureStore();
	it('should match Snapshot', () => {
		store = mockStore(initialState);
		const wrapper = shallow(<Body store={store} />);
		expect(shallowToJson(wrapper)).toMatchSnapshot();
	});
});
