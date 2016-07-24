import domainConstants from "./constants";
import md5 from "./vendor/md5baseJS";

export function getRandomKey() {
  return Math.ceil(Math.random() * 10E15);
}

export function createSearchStringFromArgs(args = {}) {
  var argList = [];

  for (var key in args) {
    if (args.hasOwnProperty(key)) {
      argList.push(`${key}=${args[key]}`);
    }
  }

  return argList.join('&');
}

export function getSignedUrl4Collection(collection, args = {}) {
  const ASK = domainConstants.API_SECRET_KEY;
  const APK = domainConstants.API_PUBLIC_KEY;

  var ts = Date.now();
  var md5sum = md5(ts + ASK + APK);
  var url = `http://gateway.marvel.com/v1/public/${collection}?apikey=${APK}&ts=${ts}&hash=${md5sum}`;
  var search = createSearchStringFromArgs(args);

  if (search.length > 0) {
    url += '&' + search;
  }

  return encodeURI(url);
}
