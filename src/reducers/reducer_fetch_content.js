import actionConstants from "../actions/constants";

const INITIAL_STATE = {comics: {data: {results: []}}, characters: {data: {results: []}}};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionConstants.CONTENT_TYPE.CHARACTERS:
      console.log(`reducing CHARACTERS`);
      return {...state, characters: action.payload.data};
    case actionConstants.CONTENT_TYPE.COMICS:
      console.log(`reducing COMICS`);
      return {...state, comics: action.payload.data};
  }

  console.log(action.type);

  return state;
}
