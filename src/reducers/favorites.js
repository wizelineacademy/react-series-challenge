import favoritesActions from '../actions/favorites';

const initialState = {
    data: {},
};

const favoritesReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {

        case favoritesActions.types.ADD_FAVORITE: {
            const { gif } = payload;
            const newState = {
                data: { ...state.data },
            };
            newState.data[gif.id] = { ...gif };
            return newState;
        }

        case favoritesActions.types.DELETE_FAVORITE: {
            const newState = {
                data: { ...state.data },
            };
            delete newState.data[payload];
            return newState;
        }

        default:
            return state;
    }
};

export default favoritesReducer;