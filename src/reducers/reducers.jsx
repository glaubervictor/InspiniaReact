import { combineReducers } from "redux";

import menuReducer from "./menuReducer";
import testeReducer from "./testeReducer";

const rootReducer = combineReducers({
  menu: menuReducer,
  teste: testeReducer
});

export default rootReducer;
