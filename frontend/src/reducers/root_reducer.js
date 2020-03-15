import { combineReducers } from "redux";
import errors from "./errors_reducer";
import session from "./session_api_reducer";
import tweets from "./tweets_reducer";

const RootReducer = combineReducers({
  session,
  tweets,
  errors
});

export default RootReducer;
