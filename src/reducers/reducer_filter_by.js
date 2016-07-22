import actionConstants from "../actions/constants";

export default (state = null, action) => {
  //console.log(`inside reducer_filter_by ${action.type}`);

  switch (action.type) {
    case actionConstants.FILTER_BY:
      //console.log(`filter by has changed to ${action.payload}`);

      return action.payload;
  }

  return state;
}
