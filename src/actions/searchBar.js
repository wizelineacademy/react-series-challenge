import { createAction } from 'redux-actions';

const SEARCH_BAR_INPUT = 'SEARCH_BAR_INPUT';

const searchBarInput = createAction(SEARCH_BAR_INPUT);

export default {
    types: {
        SEARCH_BAR_INPUT,
    },
    creators: {
        searchBarInput,
    },
}