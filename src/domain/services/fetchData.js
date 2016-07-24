import axios from "axios";
import {getSignedUrl4Collection} from "../utils";

export function fetchData(subUrl, options = {}) {
  var url = getSignedUrl4Collection(subUrl, options.queryParams);

  return axios.get(url);
}
