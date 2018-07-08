import searchBarActions from '../actions/searchBar';

const initialState = {
    search: '',
};

const searchBarReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case searchBarActions.types.SEARCH_BAR_SUBMIT: {
            return { search: payload };
        }

        default:
            return state;
    }
};

export default searchBarReducer;
