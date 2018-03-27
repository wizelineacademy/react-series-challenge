import actions from '../actions/favorites';

const initialState = {
	favorites: {}
};

const userReducer = (state = initialState, action) => {
	const { type } = action;
	const favorites = { ...state.favorites };
	switch (type) {
		case actions.types.ADD_FAVORITE:
			favorites[action.id] = {
				src: action.src,
				title: action.title,
				search: action.search
			};
			return {
				...state,
				favorites
			};
		case actions.types.REMOVE_FAVORITE:
			delete favorites[action.id];
			return {
				...state,
				favorites
			};
		default:
			return state;
	}
};

export default userReducer;
