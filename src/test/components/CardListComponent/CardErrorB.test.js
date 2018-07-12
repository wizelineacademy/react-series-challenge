import React from 'react';
import { shallow, mount } from 'enzyme';
import CardErrorB from '../../../components/CardsListComponent/CardErrorB';

describe('Card Error Boundary', () => {
	const card = {
		images: {
			original: { url: "https://media2.giphy.com/media/7vzoRu05YJp2pFMd24/giphy.gif" }
		},
		url: "https://giphy.com/gifs/ellamai-ella-mai-bood-up-7vzoRu05YJp2pFMd24",
		isFavorite: false,
	};
	function ProblemChild() {
		throw new Error('Error thrown');
	}
	test('Shallow', () => {
		const cardComp = shallow(<CardErrorB card={card} />);
		expect(cardComp).toMatchSnapshot();
	});
	test('DidCatch', () => {
		const spy = jest.spyOn(CardErrorB.prototype, 'componentDidCatch');
	    mount(<CardErrorB><ProblemChild /></CardErrorB>);
	    expect(spy).toHaveBeenCalled();
	});
});