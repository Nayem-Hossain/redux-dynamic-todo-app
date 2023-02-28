import { combineReducers } from "redux";
import filterReducer from "../filter-state/filterReducer";
import todosReducer from "../todos-state/todosReducer";
const rootReducer = combineReducers({
  filterReducer: filterReducer,
  todosReducer: todosReducer,
});
export default rootReducer;
