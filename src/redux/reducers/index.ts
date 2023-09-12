import { combineReducers } from "redux";
import { cakeReducer } from "./cakeReducers";
import { iceCreamReducer } from "./iceCreamReducer";
export const rootReducer = combineReducers({
iceCream:iceCreamReducer,
cake: cakeReducer
})