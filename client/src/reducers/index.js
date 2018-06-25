import { combineReducers } from "redux";
import authReducer from "./authReducer";

//This file combines our reducers

export default combineReducers({
  auth: authReducer
});
