import actionConstants from "../actions/constants";

export default (state = null, action) => {
  if (action.type == actionConstants.CONTENT_TYPE.COMICS) {
    console.log(`reducing COMICS`, action.payload);

    return action.payload.data || state;
  }

  return state;
}
