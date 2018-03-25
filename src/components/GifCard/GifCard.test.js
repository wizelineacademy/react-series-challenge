import React from 'react';

import { shallow } from 'enzyme';
import GifCard from './GifCard';
import { ImageCard, ImageDetails } from '../../style/style';

describe('GifCard', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<GifCard />);
	});
	it('should render an imageCard', () => {
		expect(wrapper.find(ImageCard)).toHaveLength(1);
	});
	it('should render an imageCard', () => {
		expect(
			wrapper.contains(
				<ImageDetails>
					<button>Add Favorite</button>
					<span>Favorite</span>
				</ImageDetails>
			)
		).toEqual(true);
	});
});
