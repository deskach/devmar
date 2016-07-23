import actionConstants from "../actions/constants";

export default (state = null, action) => {
  if (action.type === actionConstants.FETCH_CHAR_BY_ID) {
      console.log(`ReducerFetchCharById returned ${action.payload}`);

      return action.payload;
  }

  return state;
}
