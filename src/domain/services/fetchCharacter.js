import React from "react";
import axios from "axios";
import {getSignedUrl4Collection} from "../utils";

export default function fetchCharacterByName(name) {
  console.log('Fetching character ' + name);

  var url = getSignedUrl4Collection('characters', {name: name});

  return axios.get(url);
}