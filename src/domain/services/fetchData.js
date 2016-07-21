import axios from 'axios';
import md5 from '../utils/md5baseJS';
import domainConstants from '../constants';

const API_PRIVATE_KEY = '0679e7d83403d17ef55fa279ad810cab3185637a';
const API_PUBLIC_KEY = 'd91bd8f116c1514085350241b4a42daf';

export function fetchData(dataType, term) {
  if(!term) {
    return null;
  }

  const ts = Date.now();
  const md5sum = md5(ts + API_PRIVATE_KEY + API_PUBLIC_KEY);
  const subUrl = domainConstants.DATA_TYPE[dataType].URL;
  const url = `http://gateway.marvel.com/v1/public/${subUrl}?apikey=${API_PUBLIC_KEY}&ts=${ts}&hash=${md5sum}`;

  console.log('Fetching ' + dataType);

  return axios.get(url);
}
