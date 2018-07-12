import React from 'react';
import { shallow, render } from 'enzyme';
import CardComponent from '../../../components/CardComponent';
import { FavButton } from '../../../components/CardComponent/Card.Styled';

describe('Card Component', () => {
	const card = {
		images: {
			original: { 
				url: "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/giphy.gif" 
			}
		},
		url: "https://giphy.com/gifs/ellamai-ella-mai-bood-up-7vzoRu05YJp2pFMd24",
		isFavorite: false,
	};
	test('Card Component Shallow', () => {
		const cardComp = shallow(<CardComponent card={card} />);
		expect(cardComp).toMatchSnapshot();
	});
	test('Card Component Shallow', () => {
		const card = {
			images: {
				original: { 
					url: "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/giphy.gif" ,
					size: 5917959
				}
			},
			url: "https://giphy.com/gifs/ellamai-ella-mai-bood-up-7vzoRu05YJp2pFMd24",
			isFavorite: false,
		};
		expect(() => { render(<CardComponent card={card} />) }).toThrow();
	});
	it('Should click favorites', () => {
		const myMockFn = jest.fn();
		const c = shallow(<CardComponent card={card} addRemoveFavorites={myMockFn} />) 
		c.find(FavButton).simulate('click');
		expect(myMockFn.mock.calls.length).toBe(1);
	});
});