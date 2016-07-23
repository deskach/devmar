import actionConstants from "../actions/constants";

export default (state = null, action) => {
  if (action.type === actionConstants.FETCH_COMIC_BY_ID) {
    console.log(`Reducing FETCH_COMIC_BY_ID`);

    return action.payload;
  }

  return state;
}


