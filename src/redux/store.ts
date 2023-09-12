import { legacy_createStore as createStore, compose, applyMiddleware } from "redux";
import { cakeReducer } from "./reducers/cakeReducers";
const store = createStore(cakeReducer)
export default store