import React from 'react';
import cardsActions from '../../actions/cards';

describe('Card Actions', () => {
	const payload = { };
	test('should return loadCards action', () => {
		expect(cardsActions.creators.loadCards(payload)).toMatchSnapshot();
	});
	test('should return loadCards action !payload', () => {
		expect(cardsActions.creators.loadCards()).toMatchSnapshot();
	});
	test('should return addFavorites action', () => {
		expect(cardsActions.creators.addFavorites(payload)).toMatchSnapshot();
	});
	test('should return addFavorites action !payload', () => {
		expect(cardsActions.creators.addFavorites()).toMatchSnapshot();
	});
	test('should return removeFavorites action', () => {
		expect(cardsActions.creators.removeFavorites(payload)).toMatchSnapshot();
	});
	test('should return removeFavorites action !payload', () => {
		expect(cardsActions.creators.removeFavorites()).toMatchSnapshot();
	});
	test('should return setFavorites action', () => {
		expect(cardsActions.creators.setFavorites(payload)).toMatchSnapshot();
	});
	test('should return setFavorites action !payload', () => {
		expect(cardsActions.creators.setFavorites()).toMatchSnapshot();
	});
});