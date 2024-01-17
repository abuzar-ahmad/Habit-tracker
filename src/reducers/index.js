import { combineReducers } from "redux";
import { habitsReducer } from "./habitReducer";

// Combine multiple reducers into a single rootReducer
const rootReducer = combineReducers({
  habitsReducer, // Assign the habitsReducer to the 'habitsReducer' key in the state
});

export default rootReducer;
