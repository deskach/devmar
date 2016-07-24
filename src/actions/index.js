import {fetchData} from "../domain/services/fetchData";
import actionConstants from "./constants";
import domainConstants from "../domain/constants";

export function doFetchCharacterByName(name) {
  console.log(`doFetchCharacterByName(${name})`);
  const request = fetchData(`${domainConstants.DATA_TYPE.CHARACTERS.URL}/${name}`);

  return {
    type: actionConstants.FETCH_CHAR_BY_NAME,
    payload: request
  }
}

export function doFetchComicById(id) {
  console.log(`doFetchComicById(${id})`);
  const request = fetchData(`${domainConstants.DATA_TYPE.COMICS.URL}/${id}`);

  return {
    type: actionConstants.FETCH_COMIC_BY_ID,
    payload: request
  }
}

//TODO: refactor 3 last arguments into a dict
export function doFetchContent(contentType, term, filterBy, queryParams) {
  const CT = actionConstants.CONTENT_TYPE;
  const DT = domainConstants.DATA_TYPE;

  console.log(`doFetchContent(${contentType})`);

  var contentType2Url = {};
  contentType2Url[CT.COMICS] = DT.COMICS.URL;
  contentType2Url[CT.CHARACTERS] = DT.CHARACTERS.URL;

  const request = fetchData(contentType2Url[contentType], {term, filterBy, queryParams});

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

export function doSetQueryParams(params) {
  console.log(`doSetQueryParams(${params})`);

  return {
    type: actionConstants.SET_QUERY_PARAMS,
    payload: params
  }
}