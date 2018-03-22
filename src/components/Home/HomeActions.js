import { createAction } from "redux-actions";

const GET_TRENDING_REQUESTED = "GET_TRENDING_REQUESTED";
const GET_TRENDING_COMPLETED = "GET_TRENDING_COMPLETED";
const GET_TRENDING_FAILED = "GET_TRENDING_FAILED";

const getTrendingRequested = createAction(GET_TRENDING_REQUESTED);
const getTrendingCompleted = createAction(GET_TRENDING_COMPLETED);
const getTrendingFailed = createAction(GET_TRENDING_FAILED);

export default {
  types: {
    GET_TRENDING_REQUESTED,
    GET_TRENDING_COMPLETED,
    GET_TRENDING_FAILED
  },
  creators: {
    getTrendingRequested,
    getTrendingCompleted,
    getTrendingFailed
  }
};