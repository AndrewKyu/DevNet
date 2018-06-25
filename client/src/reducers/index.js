import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";

//This file combines our reducers

export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});
