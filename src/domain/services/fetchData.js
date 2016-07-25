import axios from "axios";
import {getSignedUrl4Collection} from "../utils";

export function fetchData(subUrl, queryParams = {}) {
  console.log(`Fetching ${subUrl} with options=${JSON.stringify(queryParams)}`);

  var url = getSignedUrl4Collection(subUrl, queryParams);

  return axios.get(url);
}
