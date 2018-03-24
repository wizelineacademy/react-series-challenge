import { createAction } from 'redux-actions';

const GET_TRENDING_START = 'GET_TRENDING_START';
const GET_TRENDING_COMPLETE = 'GET_TRENDING_COMPLETE';
const GET_TRENDING_ERROR = 'GET_TRENDING_ERROR';
const GET_SEARCH_START = 'GET_SEARCH_START';
const GET_SEARCH_COMPLETE = 'GET_SEARCH_COMPLETE';
const GET_SEARCH_ERROR = 'GET_SEARCH_ERROR';

const getTrendingList = createAction(GET_TRENDING_START);
const getTrendingListComplete = createAction(GET_TRENDING_COMPLETE);
const getTrendingListError = createAction(GET_TRENDING_ERROR);
const getSearchList = createAction(GET_SEARCH_START);
const getSearchListComplete = createAction(GET_SEARCH_COMPLETE);
const getSearchListError = createAction(GET_SEARCH_ERROR);

export default {
    types: {
        GET_TRENDING_START,
        GET_TRENDING_COMPLETE,
        GET_TRENDING_ERROR,
        GET_SEARCH_START,
        GET_SEARCH_COMPLETE,
        GET_SEARCH_ERROR,
    },
    creators: {
        getTrendingList,
        getTrendingListComplete,
        getTrendingListError,
        getSearchList,
        getSearchListComplete,
        getSearchListError
    }
}