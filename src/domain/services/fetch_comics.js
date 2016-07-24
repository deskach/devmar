import React from "react";
import axios from "axios";
import {getSignedUrl4Collection} from "../utils";

export default function fetchComicById(id) {
  console.log(`Fetching comic with id '${id}'`);

  var url = getSignedUrl4Collection(`comics/${id}`);

  return axios.get(url);
}