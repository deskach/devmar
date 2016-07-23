import React from "react";
import axios from "axios";
import {getSignedUrl4Collection} from "../utils/md5baseJS";

export default function fetchCharacterByName(name) {
  console.log('Fetching character by id ' + name);

  var url = getSignedUrl4Collection('characters', {name: name});

  console.log(url);

  return axios.get(url);
  // return axios.get(`http://gateway.marvel.com/v1/public/characters?apikey=d91bd8f116c1514085350241b4a42daf&ts=1469255792217&hash=758f03f7e335d0119751e198c57dc448&name=${name}`);
}