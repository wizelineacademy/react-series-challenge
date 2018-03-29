import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import GifCard, { gifCard } from './GifCard';
import configureStore from 'redux-mock-store';

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

describe('gifCard', () => {
	let wrapper;
	let store;
	const mockStore = configureStore();
	beforeEach(() => {
		wrapper = shallow(<gifCard />);
	});
	it('should be match Snapshot', () => {
		const renderedValue = renderer.create(<gifCard />).toJSON();
		expect(renderedValue).toMatchSnapshot();
	});
	it('should render the component', () => {
		store = mockStore(initialState);
		wrapper = shallow(<GifCard store={store} />);
		expect(wrapper.length).toEqual(1);
	});
});

describe('GifCard big', () => {
	let wrapper;
	let store;
	const mockStore = configureStore();
	beforeEach(() => {
		initialState.user.favorites['id'] = {};
		store = mockStore(initialState);
		wrapper = shallow(
			<GifCard
				src={'src'}
				gifTitle={'gifTitle'}
				id={'id'}
				goBack={'pgoBack'}
				big
				store={store}
			/>
		);
	});
	it('should render the GifCard with favorite property', () => {
		expect(wrapper.find(gifCard).prop('favorite')).toEqual(true);
	});
	it('should be match Snapshot', () => {
		const renderedValue = renderer
			.create(
				<GifCard
					src={'src'}
					gifTitle={'gifTitle'}
					id={'id'}
					goBack={'pgoBack'}
					big
					store={store}
				/>
			)
			.toJSON();
		expect(renderedValue).toMatchSnapshot();
	});
});
