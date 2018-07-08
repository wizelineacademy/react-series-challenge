import { Action, Store, Dispatch } from "redux";
import { FETCH_TRENDING, fetched_gifs } from '../actions/gifs';

import * as API from '../api';

function fetchGifs(dispatch: Dispatch) {
  console.log("Fetching GIFs!...");
  return API.getTrending()
    .then(({data}) => dispatch(fetched_gifs(data)));
}

const gifsFetcher = (store: Store) => (next: any) => (action: Action) => {
    const { type } = action;
    if (type === FETCH_TRENDING ) fetchGifs(store.dispatch);

    return next(action);
  };

export default gifsFetcher;