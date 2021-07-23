import { combineReducers } from "redux";
import storeReducer from "./storeReducer";

const reducers = combineReducers({ store: storeReducer });

export default reducers;
