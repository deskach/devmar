import axios from "axios";
import domainConstants from "../constants";
import {getSignedUrl4Collection} from "../utils";

//TODO: Current fetchComicsByCharacter implementation does not support paging, this should be fixed

export function fetchComicsByCharacter(options = {}) {
  console.log(`fetchComicsByCharacter options=${JSON.stringify(options)}`);
  if (!options.hasOwnProperty('term') || !options.term) {
    return null;
  }

  const charactersSubUrl = domainConstants.DATA_TYPE.CHARACTERS.URL;
  const comicsSubUri = domainConstants.DATA_TYPE.COMICS.URL;

  // Find character id using its name provided in options.term
  var searchParams = {nameStartsWith: options.term};
  var url = getSignedUrl4Collection(charactersSubUrl, searchParams);

  console.log(url);

  var request = axios.get(url).then((response) => {
    if (response.data.data.results) {
      const id = response.data.data.results[0].id;
      const collection = `${charactersSubUrl}/${id}/${comicsSubUri}`;

      console.log(collection);
      var url1 = getSignedUrl4Collection(collection);
      console.log(url1);

      return axios.get(url1);
    }
  });

  return request;
}
