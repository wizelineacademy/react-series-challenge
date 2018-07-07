import { createStore, applyMiddleware } from "redux";
import logger from "./middlewares/logger";
import rootReducer from "./reducer";

export default createStore(rootReducer, applyMiddleware(logger));
