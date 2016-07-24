import {combineReducers} from "redux";
import actionConstants from "../actions/constants";

const rootReducer = combineReducers({
  content: ContentReducer,
  filterBy: SimplePayloadReducer(actionConstants.FILTER_BY),
  characterDetails: SimplePayloadReducer(actionConstants.FETCH_CHAR_BY_ID),
  comicDetails: SimplePayloadReducer(actionConstants.FETCH_COMIC_BY_ID),
  location: SimplePayloadReducer(actionConstants.SAVE_LOCATION)
});

export default rootReducer;

function ContentReducer(state = {comics: {data: {results: []}}, characters: {data: {results: []}}}, action) {
  if (action.payload) {
    switch (action.type) {
      case actionConstants.CONTENT_TYPE.CHARACTERS:
        return {...state, characters: action.payload.data};

      case actionConstants.CONTENT_TYPE.COMICS:
      case actionConstants.FILTER_COMICS_BY_CHARACTER:
      case actionConstants.FILTER_COMICS_BY_SERIES:
        return {...state, comics: action.payload.data};
    }
  }

  return state;
}

function SimplePayloadReducer(action_name) {
  return (state = null, action) => {
    if (action.type === action_name) {
      return action.payload;
    }

    return state;
  }
}
