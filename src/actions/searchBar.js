const SEARCH_BAR_SUBMIT = 'SEARCH_BAR_SUBMIT';

const searchBarSubmit = (payload = '') => ({ type: SEARCH_BAR_SUBMIT, payload });

export default {
    types: {
        SEARCH_BAR_SUBMIT,
    },
    creators: {
        searchBarSubmit,
    },
}