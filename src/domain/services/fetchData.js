import axios from "axios";
import md5 from "../vendor/md5baseJS";
import domainConstants from "../constants";

export function fetchData(dataType, options) {
  console.log(`Fetching ${dataType} with options=${JSON.stringify(options)}`);

  const ASK = domainConstants.API_SECRET_KEY;
  const APK = domainConstants.API_PUBLIC_KEY;

  const filterBy = options.filterBy;
  const term = options.term;

  var ts = Date.now();
  var md5sum = md5(ts + ASK + APK);
  var subUrl = domainConstants.DATA_TYPE[dataType].URL;
  var url = `http://gateway.marvel.com/v1/public/${subUrl}?apikey=${APK}&ts=${ts}&hash=${md5sum}`;

  if (filterBy == domainConstants.FILTER_TYPES.BY_CHARACTER) {
    subUrl = domainConstants.DATA_TYPE.CHARACTERS.URL;
    url = `http://gateway.marvel.com/v1/public/${subUrl}?apikey=${APK}&ts=${ts}&hash=${md5sum}&name=${term}`;

    return axios.get(url).then((response) => {
      var id = response.data.data.results[0].id;

      subUrl = domainConstants.DATA_TYPE.COMICS.URL;
      url = `http://gateway.marvel.com/v1/public/${subUrl}?apikey=${APK}&ts=${ts}&hash=${md5sum}&characters=${id}`;

      return axios.get(url);
    })
  } else if (filterBy == domainConstants.FILTER_TYPES.BY_SERIES) {
    url = `http://gateway.marvel.com/v1/public/series?apikey=${APK}&ts=${ts}&hash=${md5sum}&titleStartsWith=${term}`;

    return axios.get(url).then((response) => {
      var ids = response.data.data.results.map(r => {
        return r.id;
      }).join(',');

      subUrl = domainConstants.DATA_TYPE.COMICS.URL;
      url = `http://gateway.marvel.com/v1/public/${subUrl}?apikey=${APK}&ts=${ts}&hash=${md5sum}&series=${ids}`;

      return axios.get(url);
    })
  }
  else {
    return axios.get(url);
  }
}
