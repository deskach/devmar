import {fetchData} from "../domain/services/fetchData";
import actionConstants from "./constants";
import domainConstants from "../domain/constants";
import {fetchComicsByCharacter} from "../domain/services/fetchComicsByCharacter";
import {fetchComicsBySeries} from "../domain/services/fetchComicsBySeries";

export function doFetchCharacterById(id) {
  const request = fetchData(`${domainConstants.DATA_TYPE.CHARACTERS.URL}/${id}`);

  return {
    type: actionConstants.FETCH_CHAR_BY_ID,
    payload: request
  }
}

export function doFetchComicById(id) {
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

  var contentType2Url = {};
  contentType2Url[CT.COMICS] = DT.COMICS.URL;
  contentType2Url[CT.CHARACTERS] = DT.CHARACTERS.URL;

  const request = fetchData(contentType2Url[contentType], {term, filterBy, queryParams});

  return {
    type: contentType,
    payload: request //if the payload is a promise redux_promise will wait for the response and put it in place
  };
}

export function doFilterComicsByCharacter(term, queryParams) {
  const request = fetchComicsByCharacter(term, queryParams);

  return {
    type: actionConstants.FILTER_COMICS_BY_CHARACTER,
    payload: request
  };
}

export function doFilterComicsBySeries(term, queryParams) {
  const request = fetchComicsBySeries(term, queryParams);

  return {
    type: actionConstants.FILTER_COMICS_BY_SERIES,
    payload: request
  };
}

export function doFilterBy(filterBy) {
  return {
    type: actionConstants.FILTER_BY,
    payload: filterBy
  };
}

export function doSaveLocation(params) {
  return {
    type: actionConstants.SAVE_LOCATION,
    payload: params
  };
}