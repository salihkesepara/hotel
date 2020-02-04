import { combineReducers } from "redux";
import reservations from "./reducers/reservations";

const rootReducer = combineReducers({
  reservations
});

export default rootReducer;