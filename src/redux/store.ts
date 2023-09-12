import { legacy_createStore as createStore, compose, applyMiddleware } from "redux";
import {rootReducer} from '../redux/reducers'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(rootReducer, composeWithDevTools(compose(applyMiddleware(logger))))
export default store