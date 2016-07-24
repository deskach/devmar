import axios from "axios";
import domainConstants from "../constants";
import {getSignedUrl4Collection} from "../utils";

//TODO: Current implementation does not support paging, this should be fixed

export function fetchComicsBySeries(options = {}) {
  console.log(`fetchComicsByCharacter options=${JSON.stringify(options)}`);
  if (!options.hasOwnProperty('term') || !options.term) {
    return null;
  }

  const seriesSubUrl = domainConstants.DATA_TYPE.SERIES.URL;
  const comicsSubUri = domainConstants.DATA_TYPE.COMICS.URL;

  // Find character id using its name provided in options.term
  var searchParams = {titleStartsWith: options.term};
  var url = getSignedUrl4Collection(seriesSubUrl, searchParams);

  var request = axios.get(url).then((response) => {
    if (response.data.data.results) {
      const id = response.data.data.results[0].id;
      const collection = `${seriesSubUrl}/${id}/${comicsSubUri}`;

      var url1 = getSignedUrl4Collection(collection);

      return axios.get(url1);
    }
  });

  return request;
}
