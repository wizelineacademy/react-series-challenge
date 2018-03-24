import { createAction } from 'redux-actions';

const GET_TRENDING_START = 'GET_TRENDING_START';
const GET_TRENDING_COMPLETE = 'GET_TRENDING_COMPLETE';
const GET_TRENDING_ERROR = 'GET_TRENDING_ERROR';

const getTrendingList = createAction(GET_TRENDING_START);
const getTrendingListComplete = createAction(GET_TRENDING_COMPLETE);
const getTrendingListError = createAction(GET_TRENDING_ERROR);

export default {
    types: {
        GET_TRENDING_START,
        GET_TRENDING_COMPLETE,
        GET_TRENDING_ERROR
    },
    creators: {
        getTrendingList,
        getTrendingListComplete,
        getTrendingListError
    }
}