import React from 'react';
import { render } from 'enzyme';
import { CardItem, CardFooter, FavButton } from '../../../components/CardComponent/Card.Styled';

describe('Card style', () => {
	it('card item should work', () => {
		const ci = render(<CardItem />);
		expect(ci).toMatchSnapshot();
	})
	it('card footer should work', () => {
		const ci = render(<CardFooter />);
		expect(ci).toMatchSnapshot();
	})
	it('card FavButton should work', () => {
		const ci = render(<FavButton />);
		expect(ci).toMatchSnapshot();
	})
	it('should receive props', () => {
		const ci = render(<FavButton favorite />);
		expect(ci).toMatchSnapshot();
	});
});