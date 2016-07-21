import actionConstants from "../actions/constants";

export default (state = null, action) => {
  if (action.type == actionConstants.CONTENT_TYPE.CHARACTERS) {
    console.log(`reducing CHARACTERS`);

    return action.payload.data || state;
  }

  return state;
}
