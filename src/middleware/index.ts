import { Action, Store, Dispatch } from "redux";
import { FETCH_TRENDING, fetched_gifs } from '../actions/gifs';

function fetchGifs(dispatch: Dispatch) {
  console.log("Fetching GIFs!...");
  dispatch(fetched_gifs([ "HERE SHOULD BE THE GIFS" ]));
}

const gifsFetcher = (store: Store) => (next: any) => (action: Action) => {
    const { type } = action;
    if (type === FETCH_TRENDING ) fetchGifs(store.dispatch);

    return next(action);
  };

export default gifsFetcher;