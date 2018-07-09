import favsSearchBarActions from '../actions/favsSearchBar';

const initialState = {
    value: ''
};

const favsSearchBarReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case favsSearchBarActions.types.FAVS_SEARCH_BAR_INPUT: {
            return { value: payload };
        }

        default:
            return state;
    }
};

export default favsSearchBarReducer;
