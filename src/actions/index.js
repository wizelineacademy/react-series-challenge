import {createAction} from 'redux-actions';

// No need to separate in their respective file. It's an extremely small project.

// View related
const viewType = {
    SEARCH: 'SEARCH',
    FAVORITES: 'FAVORITES'
};

const SET_VIEW = "SET_VIEW";
const UPDATE_FILTER = "CURRENT_FILTER";

const setView = createAction(SET_VIEW);
const updateFilter = createAction(UPDATE_FILTER);

// Giphy related
const GIGHY_FETCHED = "GIGHY_FETCHED";
const GIGHY_GET = "GIGHY_GET";

const fetchedGiphies = createAction(GIGHY_FETCHED);
const getGiphies = createAction(GIGHY_GET);

// Favorites related
const FAVORITES_ADD = "FAVORITES_ADD";
const FAVORITES_REMOVE = "FAVORITES_REMOVE";

const addFavorites = createAction(FAVORITES_ADD);
const removeFavorites = createAction(FAVORITES_REMOVE);

export default {
    enums: {
        viewType
    },
    types: {
        SET_VIEW,
        UPDATE_FILTER,
        GIGHY_FETCHED,
        GIGHY_GET,
        FAVORITES_ADD,
        FAVORITES_REMOVE
    },
    creators: {
        setView,
        updateFilter,
        fetchedGiphies,
        getGiphies,
        addFavorites,
        removeFavorites
    },
};
