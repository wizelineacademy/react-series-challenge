const FAVS_SEARCH_BAR_INPUT = 'FAVS_SEARCH_BAR_INPUT';

const favsSearchBarInput = (payload = '') => ({ type: FAVS_SEARCH_BAR_INPUT, payload });

export default {
    types: {
        FAVS_SEARCH_BAR_INPUT,
    },
    creators: {
        favsSearchBarInput,
    },
}