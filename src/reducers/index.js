import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import hardSet from "redux-persist/lib/stateReconciler/hardSet";

import trendGifs from "./trendGifs";
import searchGifs from "./searchGifs";
import favorites from "./favorites";
import search from "./search";

const rootPersistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["favorites"]
};

const favoritesPersistConfig = {
  key: "favorites",
  storage: storage,
  blacklist: ["filtered"],
  stateReconciler: hardSet
};

const rootReducer = combineReducers({
  trendGifs,
  searchGifs,
  favorites: persistReducer(favoritesPersistConfig, favorites),
  search
});

export default persistReducer(rootPersistConfig, rootReducer);
