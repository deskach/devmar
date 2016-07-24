import {combineReducers} from "redux";
import actionConstants from "../actions/constants";

function ContentReducer(state = {comics: {data: {results: []}}, characters: {data: {results: []}}}, action) {
  switch (action.type) {
    case actionConstants.CONTENT_TYPE.CHARACTERS:
      console.log(`ContentReducer reduced CHARACTERS`);
      return {...state, characters: action.payload.data};
    case actionConstants.CONTENT_TYPE.COMICS:
      console.log(`ContentReducer reduced COMICS`);
      return {...state, comics: action.payload.data};
  }

  return state;
}

function SimplePayloadReducer(action_name) {
  return (state = null, action) => {
    if (action.type === action_name) {
      console.log(`Simple payload reducer processed ${action.type} and returned ${action.payload}`);

      return action.payload;
    }

    return state;
  }
}

const rootReducer = combineReducers({
  content: ContentReducer,
  filterBy: SimplePayloadReducer(actionConstants.FILTER_BY),
  characterDetails: SimplePayloadReducer(actionConstants.FETCH_CHAR_BY_NAME),
  comicDetails: SimplePayloadReducer(actionConstants.FETCH_COMIC_BY_ID)
});

export default rootReducer;
