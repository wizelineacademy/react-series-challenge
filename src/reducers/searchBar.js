import searchBarActions from '../actions/searchBar';

const initialState = {
    value: ''
};

const searchBarReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case searchBarActions.types.SEARCH_BAR_INPUT: {
            return { value: payload };
        }

        default:
            return state;
    }
};

export default searchBarReducer;
