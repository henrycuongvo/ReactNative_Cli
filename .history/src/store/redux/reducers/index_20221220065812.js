import { combineReducers } from "@reduxjs/toolkit";
import burgerReducer from "./burger.reducer";

const appReducer = combineReducers({
  burger: burgerReducer,
});
export default appReducer;
