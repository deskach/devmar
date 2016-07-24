import axios from "axios";
import domainConstants from "../constants";
import {getSignedUrl4Collection} from "../utils";

//TODO: Current fetchComicsByCharacter implementation does not support paging, this should be fixed

export function fetchComicsByCharacter(term, options = {}) {
  if (!term) {
    return null;
  }

  const charactersSubUrl = domainConstants.DATA_TYPE.CHARACTERS.URL;
  const comicsSubUri = domainConstants.DATA_TYPE.COMICS.URL;

  // Find character id using its name provided in term
  var searchParams = {nameStartsWith: term};
  var url = getSignedUrl4Collection(charactersSubUrl, searchParams);

  var request = axios.get(url).then((response) => {
    if (response.data.data.results) {
      const id = response.data.data.results[0].id;
      const collection = `${charactersSubUrl}/${id}/${comicsSubUri}`;

      var url1 = getSignedUrl4Collection(collection);

      return axios.get(url1);
    }
  });

  return request;
}
