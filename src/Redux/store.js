import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer, userReducer } from "./Reducer/userReducer";

const rootReducer = combineReducers({
  userList: userReducer,
  userLoginReducer: userLoginReducer,
});
const middleware = [thunk];

const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
