import actionConstants from "../actions/constants";

export default (state = null, action) => {
  if (action.type === actionConstants.FETCH_CHAR_BY_NAME) {
    console.log(`Reducing FETCH_CHAR_BY_ID`);

    return action.payload;
  }

  return state;
}