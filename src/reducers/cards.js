import cardsActions from '../actions/cards';

const initCardState = {
	cards: {},
	favorites: {},
};
const CardsReducer = (state = initCardState, action) => {
	const { type, payload } = action;

	switch (type) {
		case cardsActions.types.LOAD_CARDS:{
			const { cards } = payload;
			const newState = {...state};
			newState.cards = cards.data.reduce(( newArray, card ) => {
				newArray[ card.id ] = card;
				return newArray;
			},{});
			return newState;
		}
		case cardsActions.types.ADD_REMOVE_FAVORITES:{
			const { card } = payload;
			const newState = {...state};
			newState.card = card;
			return newState;
		}
		case cardsActions.types.ADD_FAVORITES:{
			const { card } = payload;
			const newState = {...state};
			newState.favorites[card.id] = {...card, isFavorite:true};
			newState.cards[card.id] = {...card, isFavorite:true};
			return newState
		}
		case cardsActions.types.REMOVE_FAVORITES:{
			const { card } = payload;
			const newState = {...state};
			delete newState.favorites[card.id]
			newState.cards[card.id] = {...card, isFavorite:false};
			return newState;
		}
    	default:
			return state;
	}
};

export default CardsReducer;