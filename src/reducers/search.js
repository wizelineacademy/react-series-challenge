import searchActions from '../actions/search';
const initCardState = {
	term: '',
	favsTerm: '',
};
const SearchReducer = (state = initCardState, action) => {
	const { type, payload } = action;

	switch (type) {
		case searchActions.types.SEARCH_CARDS:{
			const newState = { ...state };
			newState.term = payload.searchTerm?payload.searchTerm:state.term ;
			return newState;
		}
		case searchActions.types.SEARCH_FAVS:{
			const newState = { ...state };
			newState.favsTerm = payload.searchTerm?payload.searchTerm:state.favsTerm ;
			return newState;
		}
    	default:
			return state;
	}
};

export default SearchReducer;