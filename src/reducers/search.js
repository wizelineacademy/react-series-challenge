import searchActions from '../actions/search';
const initCardState = {
	term: ''
};
const SearchReducer = (state = initCardState, action) => {
	const { type, payload } = action;

	switch (type) {
		case searchActions.types.SEARCH_CARDS:{
			const newState ={ term: payload.searchTerm?payload.searchTerm:state.term };
			return newState;
		}
		case searchActions.types.ERROR_SEARCH:{
			const newState = { ...state };
			return newState;
		}
    	default:
			return state;
	}
};

export default SearchReducer;