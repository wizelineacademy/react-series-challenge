import cardsActions from '../actions/cards';

const initCardState = {};
const CardsReducer = (state = initCardState, action) => {
	const { type, payload } = action;

	switch (type) {
		case cardsActions.types.LOAD_CARDS:{
			const { cards } = payload;
			const newState = cards.data.reduce(( newArray, card ) => {
				newArray[ card.id ] = card;
				return newArray;
			},{});
			return newState;
		}
		case cardsActions.types.ADD_FAVORITES:{
			const { card } = payload;
			console.log('favs',card);
			return state
		}
		case cardsActions.types.REMOVE_FAVORITES:{
			const { card } = payload;
			return state
		}
    	default:
			return state;
	}
};

export default CardsReducer;