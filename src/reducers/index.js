import { combineReducers } from 'redux';
import ComicsReducer from './reducer_comics';
import CharacterReducer from './reducer_characters';

const rootReducer = combineReducers({
  comics: ComicsReducer,
  characters: CharacterReducer
});

export default rootReducer;
