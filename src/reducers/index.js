import {combineReducers} from "redux";
import ContentReducer from "./reducer_fetch_content";
import FilterByReducer from "./reducer_filter_by";
import CharacterByIdReducer from "./reducer_fetch_char";

const rootReducer = combineReducers({
  content: ContentReducer,
  filterBy: FilterByReducer,
  characterDetails: CharacterByIdReducer
});

export default rootReducer;
