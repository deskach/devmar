import domainConstants from "./constants";

export function getRandomKey() {
  return this._counter++;
}
getRandomKey.prototype._counter = 0;

export function getSignedUrl4Collection(collection, args = {}) {
  const ASK = domainConstants.API_SECRET_KEY;
  const APK = domainConstants.API_PUBLIC_KEY;

  var ts = Date.now();
  var md5sum = md5(ts + ASK + APK);
  var url = `http://gateway.marvel.com/v1/public/${collection}?apikey=${APK}&ts=${ts}&hash=${md5sum}`;

  for (var key in args) {
    if (args.hasOwnProperty(key)) {
      url += `&${key}=${args[key]}`;
    }
  }

  return url;
}
