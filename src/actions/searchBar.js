const SEARCH_BAR_INPUT = 'SEARCH_BAR_INPUT';

const searchBarInput = (payload = '') => ({ type: SEARCH_BAR_INPUT, payload });

export default {
    types: {
        SEARCH_BAR_INPUT,
    },
    creators: {
        searchBarInput,
    },
}