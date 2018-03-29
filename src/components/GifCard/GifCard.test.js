import React from 'react';

import { shallow } from 'enzyme';
import gifCard from './GifCard';
import { ImageCard, ImageDetails } from '../../style/style';

describe('GifCard', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<gifCard />);
	});
	it('should render an imageCard', () => {
		expect(wrapper.find(ImageCard)).toHaveLength(1);
	});
	it('should render an ImageDetails', () => {
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
