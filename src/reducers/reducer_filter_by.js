import actionConstants from "../actions/constants";

export default (state = null, action) => {
  if (action.type === actionConstants.FILTER_BY) {
      console.log(`ReducerFilterBy returned ${action.payload}`);

      return action.payload;
  }

  return state;
}
