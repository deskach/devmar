import {combineReducers} from "redux";
import ContentReducer from "./reducer_fetch_content";
import FilterByReducer from "./reducer_filter_by";
import CharacterByIdReducer from "./reducer_fetch_char";
import ComicByIdReducer from "./reducer_fetch_comic";

const rootReducer = combineReducers({
  content: ContentReducer,
  filterBy: FilterByReducer,
  characterDetails: CharacterByIdReducer,
  comicDetail: ComicByIdReducer
});

export default rootReducer;
