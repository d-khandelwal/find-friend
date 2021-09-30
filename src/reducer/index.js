import { combineReducers } from "redux";
import commonFriendReducer from "../reducer/commonFriendReducer";

const rootReducer = combineReducers({
  commonFriendReducer: commonFriendReducer,
})

export default rootReducer;