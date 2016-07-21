import {fetchData} from "../domain/services/fetchData";
import actionConstants from './constants';
import domainConstants from '../domain/constants';

export function doFetchContent(contentType, term) {
  const CT = actionConstants.CONTENT_TYPE;
  const DT = domainConstants.DATA_TYPE;

  console.log("contentType  = " + contentType);

  var contentType2dataType = { };
  contentType2dataType[CT.COMICS] =  DT.COMICS.TYPE_NAME;
  contentType2dataType[CT.CHARACTERS] = DT.CHARACTERS.TYPE_NAME;

  console.log(contentType);
  const request = fetchData(contentType2dataType[contentType], term);

  return {
    type: contentType,
    payload: request //if the payload is a promise redux_promise will wait for the response and put it in place
  };
}
