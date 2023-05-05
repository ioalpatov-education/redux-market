import { createStore, combineReducers } from "redux";
import marketReducer from "../reducers/marketReducer";

const reducer = combineReducers({
  market: marketReducer,
});

const store = createStore(reducer);
export default store;
