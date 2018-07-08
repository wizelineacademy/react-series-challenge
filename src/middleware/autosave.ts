import { Store, Action } from "redux";

const autosave = (store: Store) => (next: any) => (action: Action) => {
    const nextMiddlewares    = next(action);
    const stateAfterReducers = store.getState();

    localStorage.setItem('favs', JSON.stringify(stateAfterReducers.favs));

    return nextMiddlewares;
  };

  export default autosave;
