import { Action } from "redux";

const gifsFetcher = (store: any) => (next: any) => (action: Action) => {
    const { type } = action;
    // TODO: Fetch gifs
    return next(action);
  };

export default gifsFetcher;