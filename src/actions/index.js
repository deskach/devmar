import {fetchData} from "../domain/services/fetchData";
import actionConstants from "./constants";
import domainConstants from "../domain/constants";
import {fetchComicsByCharacter} from "../domain/services/fetchComicsByCharacter";
import {fetchComicsBySeries} from "../domain/services/fetchComicsBySeries";

export function doFetchCharacterById(id) {
  console.log(`doFetchCharacterById(${id})`);
  const request = fetchData(`${domainConstants.DATA_TYPE.CHARACTERS.URL}/${id}`);

  return {
    type: actionConstants.FETCH_CHAR_BY_ID,
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
export function doFetchContent(contentType, queryParams) {
  const CT = actionConstants.CONTENT_TYPE;
  const DT = domainConstants.DATA_TYPE;

  console.log(`doFetchContent(${contentType}), ${queryParams}`);

  var contentType2Url = {};
  contentType2Url[CT.COMICS] = DT.COMICS.URL;
  contentType2Url[CT.CHARACTERS] = DT.CHARACTERS.URL;

  const charNameStartsWith = queryParams[
    domainConstants.URL_SEARCH_COMICS_BY_CHARACTER];
  const seriesTitleStartsWith = queryParams[
    domainConstants.URL_SEARCH_COMICS_BY_SERIES];
  var updatedQueryParams = {...queryParams};

  if (charNameStartsWith) {
    delete updatedQueryParams[domainConstants.URL_SEARCH_COMICS_BY_CHARACTER];

    return doFilterComicsByCharacter(charNameStartsWith, updatedQueryParams)
  } else if (seriesTitleStartsWith) {
    delete updatedQueryParams[domainConstants.URL_SEARCH_COMICS_BY_SERIES];

    return doFilterComicsBySeries(seriesTitleStartsWith, updatedQueryParams)
  }

  const request = fetchData(contentType2Url[contentType], queryParams);

  return {
    type: contentType,
    payload: request //if the payload is a promise redux_promise will wait for the response and put it in place
  };
}

export function doFilterComicsByCharacter(term, queryParams) {
  console.log(`doFilterComicsByCharacter(${term}, ${JSON.stringify(queryParams)})`);

  const request = fetchComicsByCharacter(term, queryParams);

  return {
    type: actionConstants.FILTER_COMICS_BY_CHARACTER,
    payload: request
  };
}

export function doFilterComicsBySeries(term, queryParams) {
  console.log(`doFilterComicsBySeries(${term}, ${JSON.stringify(queryParams)})`);

  const request = fetchComicsBySeries(term, queryParams);

  return {
    type: actionConstants.FILTER_COMICS_BY_SERIES,
    payload: request
  };
}

export function doFilterBy(filterBy) {
  console.log(`doFilterBy(${filterBy})`);

  return {
    type: actionConstants.FILTER_BY,
    payload: filterBy
  };
}

export function doSaveLocation(params) {
  console.log(`doSaveLocation(${params})`);

  return {
    type: actionConstants.SAVE_LOCATION,
    payload: params
  };
}