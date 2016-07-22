import axios from 'axios';
import md5 from '../utils/md5baseJS';
import domainConstants from '../constants';

const API_PRIVATE_KEY = '0679e7d83403d17ef55fa279ad810cab3185637a';
const API_PUBLIC_KEY = 'd91bd8f116c1514085350241b4a42daf';

export function fetchData(dataType, term, filterBy) {
  //console.log('Fetching ' + dataType);

  var ts = Date.now();
  var md5sum = md5(ts + API_PRIVATE_KEY + API_PUBLIC_KEY);
  var subUrl = domainConstants.DATA_TYPE[dataType].URL;
  var url = `http://gateway.marvel.com/v1/public/${subUrl}?apikey=${API_PUBLIC_KEY}&ts=${ts}&hash=${md5sum}`;
  var processedTerm = term ? term.replace(' ', '%20') : null;

  if (processedTerm && filterBy == domainConstants.FILTER_TYPES.BY_CHARACTER) {
    subUrl = domainConstants.DATA_TYPE.CHARACTERS.URL;
    url = `http://gateway.marvel.com/v1/public/${subUrl}?apikey=${API_PUBLIC_KEY}&ts=${ts}&hash=${md5sum}&name=${processedTerm}`;

    return axios.get(url).then((response) => {
      //console.log("retrieving id");
      var id = response.data.data.results[0].id;
      //console.log("ID = " + id);

      subUrl = domainConstants.DATA_TYPE.COMICS.URL;
      url = `http://gateway.marvel.com/v1/public/${subUrl}?apikey=${API_PUBLIC_KEY}&ts=${ts}&hash=${md5sum}&characters=${id}`;

      return axios.get(url);
    })
  } else if (processedTerm && filterBy == domainConstants.FILTER_TYPES.BY_SERIES) {
    url = `http://gateway.marvel.com/v1/public/series?apikey=${API_PUBLIC_KEY}&ts=${ts}&hash=${md5sum}&titleStartsWith=${processedTerm}`;

    return axios.get(url).then((response) => {
      //console.log("retrieving series id ", response.data );
      var ids = response.data.data.results.map(r => { return r.id; }).join(',');
      //console.log("series IDs = ", ids);

      subUrl = domainConstants.DATA_TYPE.COMICS.URL;
      url = `http://gateway.marvel.com/v1/public/${subUrl}?apikey=${API_PUBLIC_KEY}&ts=${ts}&hash=${md5sum}&series=${ids}`;

      return axios.get(url);
    })
  }
  else {
    return axios.get(url);
  }
}
