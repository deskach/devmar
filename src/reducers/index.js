import { combineReducers } from 'redux';
import ContentReducer from './reducer_fetch_content';
import FilterByReducer from './reducer_filter_by';

const rootReducer = combineReducers({
  content: ContentReducer,
  filterBy: FilterByReducer
});

export default rootReducer;
