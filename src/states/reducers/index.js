import { combineReducers } from "redux";
import cartReducer from "../reducers/cartReducer";

export const reducers = {
  product: cartReducer,
};

export default combineReducers(reducers);
