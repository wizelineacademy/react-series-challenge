import actions from '../actions/favorites';

const initialState = {
	favorites: {}
};

const userReducer = (state = initialState, action) => {
	const { type } = action;
	const favorites = { ...state.favorites };
	switch (type) {
		case actions.types.TOGGLE_FAVORITE:
			if (favorites[action.id]) {
				delete favorites[action.id];
			} else {
				favorites[action.id] = {
					src: action.src,
					title: action.title,
					search: action.search
				};
			}
			return {
				...state,
				favorites
			};
		case actions.types.LOAD_FAVORITES:
			return {
				...state,
				favorites: action.favorites
			};
		default:
			return state;
	}
};

export default userReducer;
