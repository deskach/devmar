import {fetchData} from "../domain/services/fetchData";
import actionConstants from "./constants";
import domainConstants from "../domain/constants";
import fetchCharacterByName from "../domain/services/fetchCharacter";

export function doFetchCharacterByName(name) {
  console.log(`doFetchCharacterByName(${name})`);
  const request = fetchCharacterByName(name);

  return {
    type: actionConstants.FETCH_CHAR_BY_ID,
    payload: request
  }
}

export function doFetchContent(contentType, term, filterBy) {
  const CT = actionConstants.CONTENT_TYPE;
  const DT = domainConstants.DATA_TYPE;

  console.log(`doFetchContent(${contentType})`);

  var contentType2dataType = { };
  contentType2dataType[CT.COMICS] =  DT.COMICS.TYPE_NAME;
  contentType2dataType[CT.CHARACTERS] = DT.CHARACTERS.TYPE_NAME;

  const request = fetchData(contentType2dataType[contentType], term, filterBy);

  return {
    type: contentType,
    payload: request //if the payload is a promise redux_promise will wait for the response and put it in place
  };
}

export function doFilterBy(filterBy) {
  console.log(`doFilterBy(${filterBy})`);

  return {
    type: actionConstants.FILTER_BY,
    payload: filterBy
  }
}